
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage></HomePage>} />
          <Route path='/RegisterForm' element={<RegisterForm></RegisterForm>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;


// import React from 'react';
// import './App.css';
// import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
// import StudentsList from './components/StudentsList';
// import Login from './components/Log in/Log_in';
// import Signin from './components/Sign in/Sign_in';
// import Secretary from './components/Secretary/Secretary';
// import Home from './components/Home/Home';
// import Navbar from './components/Navbar/index';
// import { useHistory } from "react-router-dom";//history A

// function App() {


// const history = useHistory();//history B
// const h='a';
// const f=()=>{
//     console.log(h);
//     history.push({ pathname: `/Log_in` });
// }

// return (
//     <>
//     {/* <Navbar /> */}
//     <button onClick={f} variant="contained" color="primary">hi</button>
//     <Switch>
//         <Route path='/Home' exact component={Home} />
//         <Route path='/Log_in' component={Login} />
//         <Route path='/Sign_in' component={Signin} />
//         <Route path='/Secretary' component={Secretary} />
//         <Route path='/StudentsList' component={StudentsList} />
//     </Switch>   
//     </>

// );
// }