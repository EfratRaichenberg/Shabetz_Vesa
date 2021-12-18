import React from 'react';
import RegisterForm from './RegisterForm'
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap';
function HomePage() {
    const navigate = useNavigate();
    const handleClick = e => {
        e.preventDefault()
        navigate("/RegisterForm");
    }
    return (
        <div>
            <Button onClick={handleClick}>
                sign in
            </Button>
        </div>
    );
};
export default HomePage;