import React from 'react';
import logo from '../pictures/logo.png';
import "./navbar.css";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Navbar(props) {
    const navigate = useNavigate();
    const logout = () => {
        props.setUser({
            user: {
                UserId: '',
                UserNAme: '',
                password: '',
                Type: '',
                mail: '',
                phone: '',
                City: '',
                Neighborhood: '',
                Street: '',
                Num_places: '',
                Car_leaflet: '',
                Casual_status: false,
                Approved_status: false,
            }
        })
        alert("להתראות בפעם הבאה:)")
        navigate("/");
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand p-0 me-2" href="/">
                <img className='logoimg' src={logo} alt="Logo" />
            </a>
            {props.userDetails.user.UserNAme != '' &&
                <div className="nav-item m-2">שלום לך, {props.userDetails.user.UserNAme} </div>}

            <div className="container-fluid" dir="rtl">
                {props.userDetails.user.Type === 'Passenger' &&
                <div className="navber-brand d-flex">
                    <div className="nav-item m-2">
                        <a className="" href='PassengerZone'
                        >
                            לאזור האישי
                        </a>
                    </div>
                </div>}
                {props.userDetails.user.Type === 'Volunteer' &&
                <div className="navber-brand d-flex">
                    <div className="nav-item m-2">
                        <a className="" href='VolunteerZone'
                        >
                            לאזור האישי
                        </a>
                    </div>
                </div>}
                {props.userDetails.user.Type === 'Admin' &&
                <div className="navber-brand d-flex">
                    <div className="nav-item m-2">
                        <a className="" href='ManagerZone'
                        >
                            לאזור האישי
                        </a>
                    </div>
                </div>}
                <div className="navber-brand d-flex">
                    <div className="nav-item m-2">
                        <a className="" href="/About"
                        >
                            אודות
                        </a>
                    </div>

                </div>
                <div className="navber-brand d-flex align-self-center ">
                    <div className="nav-item m-2">
                        <a href="/SignIn" className="notification">
                            כניסה
                            {/* <i class="fa fa-edit" title="edit task"></i> */}
                            {/* <FontAwesomeIcon icon="fa-solid faUser" size="lg" /> */}
                        </a>
                    </div>
                    <div className="nav-item m-2">
                        <a className="align-self-center" href="/SignUp"
                        >
                            הרשמה
                        </a>
                    </div>
                    <div className="nav-item m-2">
                        <a className="align-self-center" onClick={logout}>
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
const mapStateToProps = state => {
    return {
        userDetails: state?.user
    };
};
const setDispatchToProps = dispatch => {
    return {
        setUser: (USER) => dispatch({ type: 'SET_USER', user: USER }),
    }
};

const NavbarContainer = connect(mapStateToProps, setDispatchToProps)(Navbar);

export default NavbarContainer;