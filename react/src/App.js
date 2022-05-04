import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import OrderDrive from './pages/OrderDrive';
import PasPreperence from './pages/PasPreperence';
import LogOut from './pages/LogOut';
import MyComp from './pages/MyComp';
import VolCalendar from './pages/VolCalendar';
import SignUpPas from './pages/SignUpPas';
import SignUpVol from './pages/SignUpVol';
import VolunteerZone from './pages/volunteer/VolunteerZone';
import PassengerZone from './pages/passenger/PassengerZone';
import ManagerZone from './pages/manager/ManagerZone';
import { Navbar, Container } from 'react-bootstrap';
import form from './style/form.css'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
  <Provider store={store} >
    <div className="App">
      <center>
        <Router>
          <Routes>
            <Route path='/' exact element={<HomePage></HomePage>} />
            <Route path='/SignIn' element={<SignIn></SignIn>} />
            <Route path='/SignUp' element={<SignUp></SignUp>} />
            <Route path='/SignUpPas' element={<SignUpPas></SignUpPas>} />
            <Route path='/SignUpVol' element={<SignUpVol></SignUpVol>} />
            <Route path='/About' element={<About></About>} />
            <Route path='/VolCalendar' element={<VolCalendar></VolCalendar>} />
            <Route path='/OrderDrive' element={<OrderDrive></OrderDrive>} />
            <Route path='/LogOut' element={<LogOut></LogOut>} />
            <Route path='/MyComp' element={<MyComp></MyComp>} />
            <Route path='/VolunteerZone' element={<VolunteerZone></VolunteerZone>} />
            <Route path='/PassengerZone' element={<PassengerZone></PassengerZone>} />
            <Route path='/ManagerZone' element={<ManagerZone></ManagerZone>} />
            <Route path='/PasPreperence' element={<PasPreperence></PasPreperence>} />
          </Routes>
        </Router>
      </center>
    </div>
  </Provider>
  );
}

export default App;
