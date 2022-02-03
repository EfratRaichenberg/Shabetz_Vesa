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

        <div class="form-body">
            <div class="row">
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            <h3>ברוך השב</h3>
                            <form class="requires-validation" novalidate>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שם מלא" required />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="password" name="password" placeholder="סיסמא" required />
                                    <div class="valid-feedback">Password field is valid!</div>
                                    <div class="invalid-feedback">Password field cannot be blank!</div>
                                </div>


                                <div class="col-md-12 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label">זכור אותי</label>
                                        <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                    </div>


                                    <div class="form-button mt-3">
                                        <button id="submit" type="submit" class="btn btn-primary">הכנס</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SignIn;