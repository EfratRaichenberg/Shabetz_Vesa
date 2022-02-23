import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';
import { connect } from 'react-redux';
function PassengerZone() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    return (
        <>
        <Navbar></Navbar>
        <div class="passengerZone">
            <div class="profile">
                <Button>
                    פרופיל
                </Button></div>
            <div class="logOut ">
                <Button onClick={() => handleClick('LogOut')}>
                    יציאה
                </Button>
            </div>
            <div class="Home">
                <Button onClick={() => handleClick('')}>
                    בית
                </Button>
            </div>
            <div class="orderDrive">
                <Button onClick={() => handleClick('OrderDrive')}>
                    הזמנת נסיעה
                </Button>
            </div>
            <h3 class="H3"> נסיעות קודמות:
            </h3>
            <div class="preDdrivesConetent">
                כאן תראה מידע על הנסיעה האחרונה שלך
            </div>
            <div class="feedback">
                <Button onClick={() => handleClick('FeedBack')}>
                    שליחת משוב
                </Button>
            </div>
        </div>
        </>
    );
};
// const mapStateToProps = state => {
//     return {
//        userDetails: state?.user
//        };
//    };
//    const setDispatchToProps = dispatch => {
//    return {
//        setUser: (USER) => dispatch({ type: 'SET_USER', user: USER }),
//           }
//    };
// const PassengerZoneContainer = connect(mapStateToProps, setDispatchToProps)(PassengerZone);

export default PassengerZone;