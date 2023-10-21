import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Search from './pages/Search'
import SearchId from './pages/SearchId'
import Profile from './pages/Profile'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { CreateListing } from './pages/CreateListing'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoutes } from './components/PrivateRoutes'
function App() {

  



  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/search' element={<Search/>}/>
          <Route  path='/search/id' element={<SearchId/>}/>
          <Route   element={<PrivateRoutes/>}>
          <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='/createlisting' element={<CreateListing/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
       
    </div>
  )
}

export default App