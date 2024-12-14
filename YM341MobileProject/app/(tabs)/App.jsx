import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup';
const App = () => {
 

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route index Component={Home } />
        <Route path='/home' Component={Home } />
        <Route path='/login' Component = {Login } />
        <Route path='/signup' Component = {Signup } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
