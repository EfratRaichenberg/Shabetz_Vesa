import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [passengerState, setPassengerState] = useState(
        {
            firstName: '',
            lastName: '',
            Password: '',
            street: '',
            neighborhood: '',
            city: '',
            phone: '',
            Mail: ''
            // Hospital: '',
            // Hour: '',
        }
    );
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/passenger/addNewPassenger`, {
            "Name": passengerState.firstName + " " + passengerState.lastName,
            "Phone_number": passengerState.phone,
            "City": passengerState.city,
            "Neighborhood": passengerState.neighborhood,
            "Street": passengerState.street,
            // "Hospital": passengerState.Hospital,
            // "Hour": passengerState.Hour,
            "Password": passengerState.Password,
            "Mail": passengerState.Mail
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
        handleClick('PassengerZone');
    };
    //     axios.get(`http://localhost:3001/volunteer/getVolunteerList`)
    // .then(res=>{
    //   alert(JSON.stringify(res.data))
    // });
    return (


        <div class="form-body">
            <div class="row">
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            <h3> הרשמה למשפחת שבץ וסע </h3>
                            <form class="requires-validation" novalidate onSubmit={handleSubmit}>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שם פרטי" required value={passengerState.firstName}
                                        onChange={(e) => setPassengerState({ ...passengerState, firstName: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שם משפחה" required value={passengerState.lastName}
                                        onChange={(e) => setPassengerState({ ...passengerState, lastName: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="password" name="name" placeholder="סיסמא" required value={passengerState.Password}
                                        onChange={(e) => setPassengerState({ ...passengerState, Password: e.target.value })} />
                                    <div class="valid-feedback">Password field is valid!</div>
                                    <div class="invalid-feedback">Password field cannot be blank!</div>
                                </div>


                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="רחוב" required value={passengerState.street}
                                        onChange={(e) => setPassengerState({ ...passengerState, street: e.target.value })} />
                                    <div class="valid-feedback">street field is valid!</div>
                                    <div class="invalid-feedback">street field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שכונה" required value={passengerState.neighborhood}
                                        onChange={(e) => setPassengerState({ ...passengerState, neighborhood: e.target.value })} />
                                    <div class="valid-feedback">neighborhood field is valid!</div>
                                    <div class="invalid-feedback">neighborhood field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="עיר" required value={passengerState.city}
                                        onChange={(e) => setPassengerState({ ...passengerState, city: e.target.value })} />
                                    <div class="valid-feedback">city field is valid!</div>
                                    <div class="invalid-feedback">city field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="phone" name="name" placeholder="טלפון" required value={passengerState.phone}
                                        onChange={(e) => setPassengerState({ ...passengerState, phone: e.target.value })} />
                                    <div class="valid-feedback">phone field is valid!</div>
                                    <div class="invalid-feedback">phone field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="email" name="name" placeholder="אי-מייל" required value={passengerState.Mail}
                                        onChange={(e) => setPassengerState({ ...passengerState, Mail: e.target.value })} />
                                    <div class="valid-feedback">email field is valid!</div>
                                    <div class="invalid-feedback">email field cannot be blank!</div>
                                </div>
                                {/* 
                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="בית חולים" required value={passengerState.Hospital}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hospital: e.target.value })} />
                                    <div class="valid-feedback">hospital field is valid!</div>
                                    <div class="invalid-feedback">hospital field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="time" name="name" placeholder="שעת טיפול קבועה" required value={passengerState.Hour}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hour: e.target.value })} />
                                    <div class="valid-feedback">hour field is valid!</div>
                                    <div class="invalid-feedback">hour field cannot be blank!</div>
                                </div> */}

                                <div class="col-md-12 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label">זכור אותי</label>
                                        <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                    </div>


                                    <div class="form-button mt-3">
                                        <button id="submit" type="submit" class="btn btn-primary">הירשם</button>
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

export default SignUp;
