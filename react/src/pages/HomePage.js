import React, { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
// import { render } from 'https://cdn.skypack.dev/react-dom'


// const ROOT_NODE = document.querySelector('#app')

function HomePage() {
    const navigate = useNavigate();
    const handleClick = e => {
        // e.preventDefault()
        navigate("/" + e);
    }

    return (
        <Fragment>
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
        </Fragment>
    );
};
// render(<HomePage />, ROOT_NODE)
export default HomePage;