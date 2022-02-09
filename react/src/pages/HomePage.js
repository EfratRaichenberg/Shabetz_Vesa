import React, { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
//import { render } from 'https://cdn.skypack.dev/react-dom'
//const ROOT_NODE = document.querySelector('#app')
import Navbar from '../components/navbar';
function HomePage() {
    // const navigate = useNavigate();
    // const handleClick = e => {
    //     navigate("/" + e);
    // }
    return (
        <div>
            <Navbar />
            <div className='container-fluid pt-100' style={{ height: "400px", backgroundColor: "#f0f7f9" }}>
                <h3>מערך הסעות</h3>
            </div>
        </div>
    );
};

//render(<HomePage />, ROOT_NODE)
export default HomePage;