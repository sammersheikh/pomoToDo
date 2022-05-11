import './App.css';
import { useState } from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'

const todos = [
  'Create todos',
  'Edit todos',
  'Delete todos',
  'Add Pomodoro timer'
]

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className='App'>
      <h1>PomoToDo</h1>
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
        <br />
        <ToDoList todos={todos} />
      </>
      : 
      <AuthPage setUser={setUser}/> 
      }
    </main>
  );
}
