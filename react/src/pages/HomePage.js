import React, { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
//import { render } from 'https://cdn.skypack.dev/react-dom'
//const ROOT_NODE = document.querySelector('#app')

function HomePage() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    return (
        <div class="parent">
            <div class="div1">
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
            </div>
            <div class="div2"> </div>
        </div>
    );
};

//render(<HomePage />, ROOT_NODE)
export default HomePage;