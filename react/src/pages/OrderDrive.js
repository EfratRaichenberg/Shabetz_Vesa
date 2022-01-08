import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function OrderDrive() {
    const [passengerState, setPassengerState] = useState(
        { Hour: '' }
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
        <form onSubmit={handleSubmit}>
            <label>Drive Time:
                <input
                    type="text"
                    value={passengerState.Hour}
                    onChange={(e) => setPassengerState({ ...passengerState, Hour: e.target.value })}
                />
            </label>
            <br />
        </form>
        // <div>hi</div>
    );
};
ReactDOM.render(<OrderDrive />, document.getElementById('root'));
export default OrderDrive;