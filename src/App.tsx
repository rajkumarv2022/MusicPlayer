import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import LandingPage from './component/LandingPage'
import Main from './component/Main'
import SignupPage from './component/SignupPage'
import AddSong from './Admin/AddSong'

function App() {


  return (
   
       <Router>


        <Link to='/login'></Link>

        <Routes>

          <Route path='/' Component={LandingPage}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/signup' Component={SignupPage}></Route>
          <Route path='/main' Component={Main}></Route>
          <Route path="/admin/:id/addSong" Component={AddSong}></Route>

        </Routes>


        </Router>

  )
}

export default App
