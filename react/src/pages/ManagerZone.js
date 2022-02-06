import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function ManagerZone() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    return (
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
                <Button >
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
    );
};
export default ManagerZone;