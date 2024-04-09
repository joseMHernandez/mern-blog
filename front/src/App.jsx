import React from 'react'

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Projects from './pages/Projects';
import DashBoard from './pages/DashBoard';
import SingUp from './pages/SingUp';
const App = () => {
  return (
<BrowserRouter>

<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/sign-in' element={<SignIn/>}/>
  <Route path='/sign-up' element={<SingUp/>}/>
  <Route path='/dashboard' element={<DashBoard/>}/>
  <Route path='/projects' element={<Projects/>}/>

</Routes>

</BrowserRouter>  

)

}

export default App