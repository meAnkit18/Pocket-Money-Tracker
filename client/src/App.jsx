import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'


function App() {
  

  return (
   <div style={{padding:'20px'}}className="">
    <div className="text-3xl bg-amber-950 font-bold text-center rounded-br-full shadow-lg p-4 ">

      <h1 
      className="text-3 font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text inline-block"
      >Recotrac Money</h1>
    </div>
    
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h3>Page not found</h3>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }
        />
      </Routes>
      <div className='flex justify-around bg-blue-200 rounded-t-full p-2 mt-15'>
      <h1>Made by Ankit | <a href="https://www.linkedin.com/in/meankit18/" className='text-blue-700 underline'>Linkedin</a> | <a href="https://github.com/meAnkit18" className='text-blue-700 underline'>Github</a> |</h1>
      </div>
   </div>
  )
}

export default App
