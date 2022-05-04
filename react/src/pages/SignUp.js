import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';
import "./pages.css"

function SignUp() {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='linkInSighUp'>
                <button className="inlay_button" onClick={(e) => {handleClick('SignUpVol')}}>אני רוצה להתנדב</button>
                    {/* <a className="align-self-center" href="/SignUpVol">
                        אני רוצה להתנדב
                    </a> */}

                <button className="inlay_button" onClick={(e) => {handleClick('SignUpPas')}}>אני רוצה לנסוע</button>
                    {/* <a className="align-self-center" href="/SignUpPas">
                        אני רוצה לנסוע
                    </a> */}
            </div>
        </>
    )
}
export default SignUp;