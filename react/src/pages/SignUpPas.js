import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import Navbar from '../components/navbar';
function SignUpPas() {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setPassengerState({ ...passengerState, Mail: e.target.value })
            setEmailError('')
        } else {
            setEmailError('Invalid Email address!')
        }
    }
    const [passengerState, setPassengerState] = useState(
        {

            firstName: '',
            lastName: '',
            Password: '',
            Type: 'Passenger',
            street: '',
            neighborhood: '',
            city: '',
            phone: '',
            Mail: '',
            NumPlace:0,
            CarLeaflet:false,
            Casual_status:false,
            ApprovedStatus:false

        }
    );
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/addUser`, {
            "Name": passengerState.firstName + " " + passengerState.lastName,
            "Password": passengerState.Password,
            "Type": passengerState.Type,
            "Phone_number": passengerState.phone,
            "Mail": passengerState.Mail,
            "City": passengerState.city,
            "Neighborhood": passengerState.neighborhood,
            "Street": passengerState.street,
            "Num_places":passengerState.NumPlace,
            "Car_leaflet":passengerState.CarLeaflet,
            "Casual_status": false, 
            "Approved_status":false
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
        handleClick('PasPreperence');
    };
    return (
        <>
            <Navbar></Navbar>
            <div class="form-body">
                <div class="row">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3> ?????????? ???????????? ?????? ?????? </h3>
                                <form class="requires-validation" novalidate onSubmit={handleSubmit}>
                                    <h4>* ?????????? ????????????</h4>
                                    <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="???? ????????" required value={passengerState.firstName}
                                            onChange={(e) => setPassengerState({ ...passengerState, firstName: e.target.value })} />
                                        <div class="valid-feedback">Username field is valid!</div>
                                        <div class="invalid-feedback">Username field cannot be blank!</div>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="???? ??????????" required value={passengerState.lastName}
                                            onChange={(e) => setPassengerState({ ...passengerState, lastName: e.target.value })} />
                                        <div class="valid-feedback">Username field is valid!</div>
                                        <div class="invalid-feedback">Username field cannot be blank!</div>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="password" name="name" placeholder="??????????" required value={passengerState.Password}
                                            onChange={(e) => setPassengerState({ ...passengerState, Password: e.target.value })} />
                                        <div class="valid-feedback">Password field is valid!</div>
                                        <div class="invalid-feedback">Password field cannot be blank!</div>
                                    </div>


                                    <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="????????" required value={passengerState.street}
                                            onChange={(e) => setPassengerState({ ...passengerState, street: e.target.value })} />
                                        <div class="valid-feedback">street field is valid!</div>
                                        <div class="invalid-feedback">street field cannot be blank!</div>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="??????????" required value={passengerState.neighborhood}
                                            onChange={(e) => setPassengerState({ ...passengerState, neighborhood: e.target.value })} />
                                        <div class="valid-feedback">neighborhood field is valid!</div>
                                        <div class="invalid-feedback">neighborhood field cannot be blank!</div>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" name="name" placeholder="??????" required value={passengerState.city}
                                            onChange={(e) => setPassengerState({ ...passengerState, city: e.target.value })} />
                                        <div class="valid-feedback">city field is valid!</div>
                                        <div class="invalid-feedback">city field cannot be blank!</div>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="phone" name="name" placeholder="??????????" required value={passengerState.phone}
                                            onChange={(e) => setPassengerState({ ...passengerState, phone: e.target.value })} />
                                        <div class="valid-feedback">phone field is valid!</div>
                                        <div class="invalid-feedback">phone field cannot be blank!</div>
                                    </div>

                                    <div class="col-md-12">
                                        <input class="form-control" type="text" id="userEmail" name="name" placeholder="????-????????" // value={passengerState.Mail}
                                            onChange={(e) => validateEmail(e)} /><br /> {emailError}
                                        <div class="valid-feedback">email field is valid!</div>
                                        <div class="invalid-feedback">email field cannot be blank!</div>
                                    </div>

                                    <br></br>
                                    <div class="col-md-12 mt-3">
                                      <div class="form-button mt-3">
                                            <button id="submit" type="submit" class="btn btn-primary">???????? ??????????</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPas;
