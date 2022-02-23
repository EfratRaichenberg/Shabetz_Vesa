import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';
import axios from 'axios';

function ManagerZone() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }

    const handleClickApprove = (event)  =>{
        alert("hi");
        event.preventDefault();
        alert("hello");
        axios.get(`http://localhost:3001/manager/getNewVolunteers`)
        .then(response => {
            if (response.status === 200) {
                alert(response);
            }
        })
        .catch(err => console.warn(err));
    };
    return (
        <>
        <Navbar></Navbar>
        <div class="managerZone">
            <div class="profile">
                <Button>
                    פרופיל
                </Button>
            </div>
            <div class="Home">
                <Button onClick={() => handleClick('')}>
                    בית
                </Button>
            </div>
            <div class="logOut ">
                <Button onClick={() => handleClick('LogOut')}>
                    יציאה
                </Button>
            </div>
            <div class="Assign">
                <Button onClick={() => handleClick('Assign')}>
                    שיבוץ בבקשה
                </Button>
            </div>
            <div class="approveVolunteers">
                <Button onClick={handleClickApprove}>
                    אישור מתנדבים חדשים
                </Button>
            </div>
            <div class="aprroveDrives">
                <Button>
                    אישור נסיעות למחר
                </Button>
            </div>
            <div class="viewRports">
                <Button>
                    צפיה בדוחות
                </Button>
            </div>
        </div>
        </>
    );
};
export default ManagerZone;