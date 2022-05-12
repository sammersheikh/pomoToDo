import './App.css';
import { useState } from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
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
  return (
    <main className='App'>
      <h1>PomoToDo</h1>
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <br />
       {showTodos && <ToDoList todos={todos} /> }
      </>
      : 
      <AuthPage setUser={setUser}/> 
      }
    </main>
  );
}
