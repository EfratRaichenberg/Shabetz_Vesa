import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function VolunteerZone() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    return (
        <div class="volunteerZone">
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
            <h3 class="H3"> הנסיעות שלך למחר :
            </h3>
            <div class="tomorrowDrivesContent">
                כאן תראה מידע על הנסיעות שלך למחר
            </div>
            <div class="approve">
                <Button >
                    אשר הגעה
                </Button>
            </div>
            <div class="yourFeedback">
                <Button onClick={() => handleClick('FeedBack')}>
                    הפידבקים שלך
                </Button>
            </div>
            <div class="preDrives">
                <Button onClick={() => handleClick('PreDrives')}>
                    נסיעות קודמות שלך
                </Button>
            </div>
        </div>
    );
};
export default VolunteerZone;