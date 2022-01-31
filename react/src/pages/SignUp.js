import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
            Hour: ''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/passenger/addNewPassenger`, passengerState)
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
    };
    //     axios.get(`http://localhost:3001/volunteer/getVolunteerList`)
    // .then(res=>{
    //   alert(JSON.stringify(res.data))
    // });
    return (
        <form onSubmit={handleSubmit}>
            <label>First name:
                <input
                    type="text"
                    value={passengerState.firstName}
                    onChange={(e) => setPassengerState({ ...passengerState, firstName: e.target.value })}
                />
            </label>
            <br />
            <label>Last name:
                <input
                    type="text"
                    value={passengerState.lastName}
                    onChange={(e) => setPassengerState({ ...passengerState, lastName: e.target.value })}
                />
            </label>
            <br />
            <label>street:
                <input
                    type="text"
                    value={passengerState.street}
                    onChange={(e) => setPassengerState({ ...passengerState, street: e.target.value })}
                />
            </label>
            <br />
            <label>neighborhood:
                <input
                    type="text"
                    value={passengerState.neighborhood}
                    onChange={(e) => setPassengerState({ ...passengerState, neighborhood: e.target.value })}
                />
            </label>
            <br />
            <label>city:
                <input
                    type="text"
                    value={passengerState.city}
                    onChange={(e) => setPassengerState({ ...passengerState, city: e.target.value })}
                />
            </label>
            <br />
            <label>Hospital:
                <input
                    type="text"
                    value={passengerState.Hospital}
                    onChange={(e) => setPassengerState({ ...passengerState, Hospital: e.target.value })}
                />
            </label>
            <br />
            <label>phone:
                <input
                    type="text"
                    value={passengerState.phone}
                    onChange={(e) => setPassengerState({ ...passengerState, phone: e.target.value })}
                />
            </label>
            <br />
            <label>hour:
                <input
                    type="text"
                    value={passengerState.Hour}
                    onChange={(e) => setPassengerState({ ...passengerState, Hour: e.target.value })}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

ReactDOM.render(<SignUp />, document.getElementById('root'));
export default SignUp;
