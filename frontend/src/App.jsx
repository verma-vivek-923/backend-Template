import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'

const App = () => {
  return (
    <div className='h-screen w-full bg-blue-800'>
       
       <Routes>
        <Route exact path="/login" element={<Login/>}>


        </Route>

       </Routes>





    </div>
  )
}

export default App