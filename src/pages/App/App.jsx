import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm';
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [showTodos, setShowTodos] = useState(true)
  const [todos, setTodos] = useState([
    'Create todos',
    'Edit todos',
    'Delete todos',
    'Add Pomodoro timer'
  ])

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

 // http://api.quotable.io/random

 useEffect(() => {
    fetch('http://api.quotable.io/random')
    .then(res => res.json())
    .then(
      (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
      }
    )
 },[])

    function generateQuote() {
      fetch('http://api.quotable.io/random')
    .then(res => res.json())
    .then(
      (quote) => {
          setQuote(quote.content)
          setAuthor(quote.author)
      }
    )
    }

  return (
    <main className='App'>
      <h1>PomoToDo</h1>
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <br />
        <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
       {showTodos && <ToDoList todos={todos} /> }
       <hr />
       <div>
         <h2>{quote}</h2>
         <h5>{author}</h5>
       </div>
       <button onClick={generateQuote} >Generate New Quote</button>
       <NewToDoForm addTodo={addTodo} />
      </>
      : 
      <AuthPage setUser={setUser}/> 
      }
    </main>
  );
}
