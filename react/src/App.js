
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import OrderDrive from './pages/OrderDrive';
import LogOut from './pages/LogOut';
import MyComp from './pages/MyComp';
import { Navbar, Container } from 'react-bootstrap';
import form from './style/form.css'

function App() {
  return (
    <div className="App">
      <center>
        <Router>
          <Routes>
            <Route path='/' exact element={<HomePage></HomePage>} />
            <Route path='/SignIn' element={<SignIn></SignIn>} />
            <Route path='/SignUp' element={<SignUp></SignUp>} />
            <Route path='/About' element={<About></About>} />
            <Route path='/OrderDrive' element={<OrderDrive></OrderDrive>} />
            <Route path='/LogOut' element={<LogOut></LogOut>} />
            <Route path='/MyComp' element={<MyComp></MyComp>} />
          </Routes>
        </Router>
      </center>
    </div>
  );
}

export default App;
