import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


function HomePage() {
    const navigate = useNavigate();
    const handleClick = e => {
        // e.preventDefault()
        navigate("/" + e);
    }

    return (
        <div>
            <header>=== HOME PAGE --- SHABETZ VESA :) ===</header>
            <br></br>
            <Button onClick={() => handleClick('SignIn')}>
                sign In
            </Button>
            <Button onClick={() => handleClick('SignUp')}>
                sign Up
            </Button>
            <Button onClick={() => handleClick('About')}>
                About
            </Button>
            <Button onClick={() => handleClick('OrderDrive')}>
                Order Drive
            </Button>
            <Button onClick={() => handleClick('LogOut')}>
                Log Out
            </Button>
        </div>
    );
};
export default HomePage;