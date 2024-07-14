import { useState } from 'react'
import { LoginReg } from './Pages/LoginReg/LoginReg'
import { Dashboard} from './Pages/Dashboard/Dashboard'
import { UserProvider } from '../src/Context/UserContext'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
    <UserProvider>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<LoginReg/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
         </Routes>
       </BrowserRouter>
     </UserProvider>
    </>
  )
}

export default App
