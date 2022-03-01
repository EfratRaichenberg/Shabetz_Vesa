import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../pictures/logo.png';
import "./navbar.css";
import Button from 'react-bootstrap/Button';

//import { render } from 'https://cdn.skypack.dev/react-dom'
//const ROOT_NODE = document.querySelector('#app')

function Navbar() {
    // const navigate = useNavigate();
    // const handleClick = e => {
    //     navigate("/" + e);
    // }
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand p-0 me-2" href="/home">
                <img className='logoimg' src={logo} alt="Logo" />
            </a>
            <div className="container-fluid" dir="rtl">
                <div className="navber-brand d-flex">
                    <div className="nav-item m-2">
                        <a className="" href="/About"
                        // onClick={() => handleClick('About')}
                        >
                            אודות
                        </a>
                    </div>

                </div>
                {/* <div className="nav-item m-2">
                    <a className="" href="/orderDrive">
                        הזמנת נסיעה
                    </a>
                </div> */}
                <div className="navber-brand d-flex align-self-center ">
                    <div className="nav-item m-2">

                        {/* <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                    <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                        <a href="/SignIn" className="notification">
                            כניסה
                            {/* <i class="fa fa-edit" title="edit task"></i> */}
                            {/* <FontAwesomeIcon icon="fa-solid faUser" size="lg" /> */}
                        </a>
                    </div>
                    <div className="nav-item m-2">
                        <a className="align-self-center" href="/SignUp" 
                        // onClick={() => handleClick('SignUp')}
                        >
                            הרשמה
                        </a>
                    </div>
                    <div className="nav-item m-2">
                        <a className="align-self-center" href="/LogOut" 
                        // onClick={() => handleClick('LogOut')}
                        >
                            יציאה
                        </a>
                    </div>
                </div>
                {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <form className="navbar-item d-flex align-items-center input-group w-auto" dir="rtl">
                        <input id="search-input" className="form-control lg-2" type="search" placeholder="חיפוש" ></input>
                        <button className="btn" type="submit">לוגו חיפוש</button>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="navbar-brand  nav-link" href="/Products">רוצה לראות הכל</a>
                        </li>
                    </ul>


                </div> */}
            </div>

        </nav>
        // <div class="navbar">
        //     <div className="container-fluid">
        //         <a className="navbar-brand"> <h1>שבץ וסע</h1> </a>
        //         <div className='navbar-brand d-flex align-self-center'>
        //         <Button class="btn btn-primary m-3" onClick={() => handleClick('SignIn')}>
        //             sign In
        //         </Button>
        //             <Button onClick={() => handleClick('SignUp')}>
        //                 sign Up
        //             </Button>
        //             <Button onClick={() => handleClick('About')}>
        //                 About
        //             </Button>
        //             <Button onClick={() => handleClick('OrderDrive')}>
        //                 Order Drive
        //             </Button>
        //             <Button onClick={() => handleClick('LogOut')}>
        //                 Log Out
        //             </Button></div>

        //     </div>
        // </div>
    );
};

export default Navbar;