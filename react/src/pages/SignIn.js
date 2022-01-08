import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
import axios from 'axios';

function SignIn() {
    // const [passengerState, setPassengerState] = useState(
    //     {
    //         userName: '',
    //         password: '',
    //     }
    // );
    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post(`http://localhost:3001/passenger/signIn`, passengerState)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 navigate('/Comp');
    //             }
    //         })
    //         .catch(err => console.warn(err));
    //     alert("insert successfuly");
    // };

    return (
        // <form onSubmit={handleSubmit}>
        //     <label>User Name:
        //         <input
        //             type="text"
        //             value={passengerState.userName}
        //             onChange={(e) => setPassengerState({ ...passengerState, userName: e.target.value })}
        //         />
        //     </label>
        //     <br />
        //     <label>Password:
        //         <input
        //             type="text"
        //             value={passengerState.password}
        //             onChange={(e) => setPassengerState({ ...passengerState, password: e.target.value })}
        //         />
        //     </label>
        // </form>
        <div>signIn</div>
    );
};
ReactDOM.render(<SignIn />, document.getElementById('root'));
export default SignIn;