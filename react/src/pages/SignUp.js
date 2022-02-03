import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignUp() {
    const [passengerState, setPassengerState] = useState(
        {
            firstName: '',
            lastName: '',
            street: '',
            neighborhood: '',
            city: '',
            Hospital: '',
            phone: '',
            Hour: '',
            Password: ''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/passenger/addNewPassenger`, {
            "Name": passengerState.firstName + " " + passengerState.lastName,
            "Phone_number": passengerState.phone,
            "City": passengerState.city,
            "Neighborhood": passengerState.neighborhood,
            "Street": passengerState.street,
            "Hospital": passengerState.Hospital,
            "Hour": passengerState.Hour

        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
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
                            <h3>מחכים רק שתירשם</h3>
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
                                    <input class="form-control" type="password" name="password" placeholder="סיסמא" required />
                                    <div class="valid-feedback">Password field is valid!</div>
                                    <div class="invalid-feedback">Password field cannot be blank!</div>
                                </div>


                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="רחוב" required value={passengerState.street}
                                        onChange={(e) => setPassengerState({ ...passengerState, street: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שכונה" required value={passengerState.neighborhood}
                                        onChange={(e) => setPassengerState({ ...passengerState, neighborhood: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="עיר" required value={passengerState.city}
                                        onChange={(e) => setPassengerState({ ...passengerState, city: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="בית חולים" required value={passengerState.Hospital}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hospital: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="טלפון" required  //             value={passengerState.phone}
                                        onChange={(e) => setPassengerState({ ...passengerState, phone: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שעת טיפול" required value={passengerState.Hour}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hour: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

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

        // <form onSubmit={handleSubmit}>
        //     <label>First name:
        //         <input
        //             type="text"
        //             value={passengerState.firstName}
        //             onChange={(e) => setPassengerState({ ...passengerState, firstName: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>Last name:
        //         <input
        //             type="text"
        //             value={passengerState.lastName}
        //             onChange={(e) => setPassengerState({ ...passengerState, lastName: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>street:
        //         <input
        //             type="text"
        //             value={passengerState.street}
        //             onChange={(e) => setPassengerState({ ...passengerState, street: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>neighborhood:
        //         <input
        //             type="text"
        //             value={passengerState.neighborhood}
        //             onChange={(e) => setPassengerState({ ...passengerState, neighborhood: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>city:
        //         <input
        //             type="text"
        //             value={passengerState.city}
        //             onChange={(e) => setPassengerState({ ...passengerState, city: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>Hospital:
        //         <input
        //             type="text"
        //             value={passengerState.Hospital}
        //             onChange={(e) => setPassengerState({ ...passengerState, Hospital: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>phone:
        //         <input
        //             type="text"
        //             value={passengerState.phone}
        //             onChange={(e) => setPassengerState({ ...passengerState, phone: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>hour:
        //         <input
        //             type="text"
        //             value={passengerState.Hour}
        //             onChange={(e) => setPassengerState({ ...passengerState, Hour: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>password:
        //         <input
        //             type="text"
        //             value={passengerState.Password}
        //             onChange={(e) => setPassengerState({ ...passengerState, Password: e.target.value })}
        //         />
        //     </label>
        //     <input type="submit" />
        // </form>
    )
}

export default SignUp;
