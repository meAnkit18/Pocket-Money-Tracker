import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {
  

  return (
   <div style={{padding:'20px'}}>
      <h1>Pocket Money Tracker</h1>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
   </div>
  )
}

export default App
