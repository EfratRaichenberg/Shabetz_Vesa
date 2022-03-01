import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';

function SignUp() {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div>
                    <a className="align-self-center" href="/SignUpVol">
                        אני רוצה להתנדב
                    </a>
                </div>
                <div>
                    <a className="align-self-center" href="/SignUpPas">
                        אני רוצה לנסוע
                    </a>
                </div>
            </div>
        </>
    )
}
export default SignUp;