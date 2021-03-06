import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
function RegisterForm() {
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
    
    handleClick = () =>
    {
        setPassengerState({...passengerState,firstName : '', lastName: '',street: '',neighborhood: '', city: '',Hospital: '',phone: '', Hour: ''})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/passenger/addNewPassenger`,
            {
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
        <>
        <Navbar></Navbar>
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
            <button className="x rounded-circle " style={{backgroundColor:"pink"}} onClick={handleClick}>X</button>
            <input type="submit" />
        </form>
        </>
    )
}

ReactDOM.render(<RegisterForm />, document.getElementById('root'));
export default RegisterForm;
