import { useState } from 'react'
import { Home } from './Pages/LoginReg/LoginReg'
import { UserProvider } from '../src/Context/UserContext'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css'

function App() {


  return (
    <>
    <UserProvider>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
         </Routes>
       </BrowserRouter>
     </UserProvider>
    </>
  )
}

export default App
