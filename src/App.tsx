import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import LandingPage from './component/LandingPage'

function App() {


  return (
   
       <Router>


        <Link to='/login'></Link>

        <Routes>

          <Route path='/' Component={LandingPage}></Route>
          <Route path='/login' Component={Login}></Route>

        </Routes>


        </Router>

  )
}

export default App
