import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function OrderDrive() {
    const [passengerState, setPassengerState] = useState(
        {
            Hour: '',
            Hospital: ''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.getElementById(`http://localhost:3001/passenger/addNewPassenger`,
            {
                "Hour": passengerState.Hour
            })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
    };

    return (
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
                                <h3>לאן:</h3>
                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="בית חולים " required value={passengerState.Hospital}
                                        onChange={(e) => setPassengerState({ ...passengerState, Hospital: e.target.value })} />
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
    );
};
ReactDOM.render(<OrderDrive />, document.getElementById('root'));
export default OrderDrive;