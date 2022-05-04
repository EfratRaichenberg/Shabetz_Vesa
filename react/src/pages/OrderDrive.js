import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
import { connect } from 'react-redux';

function OrderDrive(props) {
    const [passengerState, setPassengerState] = useState(
        {
            Hour: '',
            Hospital: '',
            Source:'',
            place_number:''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/addOrder`, {
            "user_id": props.userDetails.user.UserId,
            "Hour": passengerState.Hour,
            "Adrress": passengerState.Source,
            "Hospital":passengerState.Hospital,
            "place_number":passengerState.place_number
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("הזמנתך נקלטה בהצחה");
    };

    return (
        <>
        {/* <Navbar></Navbar> */}
        <div class="form-body">
            <div class="row">
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            <form class="requires-validation" novalidate onSubmit={handleSubmit}>
                                <h3>מתי נוסעים:</h3>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שעת נסיעה" required value={passengerState.Hour}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hour: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>
                                <br></br>
                                <h3>מאיפה:</h3>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="תחנת אסיפה " required value={passengerState.Source}
                                        onChange={(e) => setPassengerState({ ...passengerState, Source: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>
                                <br></br>
                                <h3>לאן:</h3>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="בית חולים" required value={passengerState.Hospital}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hospital: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>
                                <br></br>
                                <h3>כמה :</h3>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="כמות נוסעים " required value={passengerState.place_number}
                                        onChange={(e) => setPassengerState({ ...passengerState, place_number: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <div class="form-button mt-3">
                                        <button id="submit" type="submit" class="btn btn-primary">אשר</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        userDetails: state?.user
    };
};

const OrderDriveContainer = connect(mapStateToProps, null)(OrderDrive);

export default OrderDriveContainer;