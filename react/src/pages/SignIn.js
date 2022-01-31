import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignIn() {
    const [navigateTo, setNavigateTo] = useState(false)
    const [passengerState, setPassengerState] = useState(
        {
            userName: '',
            password: ''
        }
    );
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3001/passenger/signIn`, passengerState)
            .then(response => {
                if (response.status === 200) {
                    setNavigateTo(true)

                }
            })
            .catch(err => console.warn(err));
        alert("check passed");
    };
    if (navigateTo) {
        navigate('/MyComp');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>User Name:
                <input
                    type="text"
                    value={passengerState.userName}
                    onChange={(e) => setPassengerState({ ...passengerState, userName: e.target.value })}
                />
            </label>
            <br />
            <label>Password:
                <input
                    type="text"
                    value={passengerState.password}
                    onChange={(e) => setPassengerState({ ...passengerState, password: e.target.value })}
                />
            </label>
            <input type="submit" />
        </form>
        //<div>signIn</div>
    )
}
export default SignIn;