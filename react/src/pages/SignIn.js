import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/navbar';
import {connect } from 'react-redux';

const SignIn = (props) => {

    const [navigateTo, setNavigateTo] = useState(false);
    const [userState, setUserState] = useState(
        {
            Name: '',
            Password: ''
        }
    );
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3001/user/signIn/'${userState.Name}'/'${userState.Password}'`)
        .then(response => {
            alert(response.data[0].Type);
            if (response.status === 200) {
                
                setNavigateTo(true)
            }
        })
        .catch(err => console.warn(err));

        // props.setUser({
        //     user:{
        //         UserId: userD.user_id,
        //         UserNAme: userD.Name,
        //         password:userD.Password,
        //         Type:userD.Type,
        //         mail: userD.Mail,
        //         phone : userD.Phone_number,
        //         City : userD.City,
        //         Neighborhood : userD.Neighborhood,
        //         Street: userD.Street
        //     }
        // })
    };

    if (navigateTo) {
       navigate('/PassengerZone');
    }

    return (
        <>
        <Navbar></Navbar>
        <div class="form-body">
            <div class="row">
                <div class="form-holder">
                    <div class="form-content">
                        <div class="form-items">
                            
                            <h3>ברוך השב</h3>
                            <form class="requires-validation" novalidate onSubmit={handleSubmit}>

                                <div class="col-md-12">
                                    <input class="form-control" type="text" name="name" placeholder="שם מלא" required value={userState.Name}
                                        onChange={(e) => setUserState({ ...userState, Name: e.target.value })} />
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>

                                <div class="col-md-12">
                                    <input class="form-control" type="password" name="password" placeholder="סיסמא" required value={userState.Password}
                                        onChange={(e) => setUserState({ ...userState, Password: e.target.value })} />
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
    </>
    )

}

const mapStateToProps = state => {
    return {
        userDetails: state?.user
    };
};
const setDispatchToProps = dispatch => {
    return {
        setUser: (USER) => dispatch({ type: 'SET_USER', user: USER }),
    }
};

const SignInContainer = connect(mapStateToProps, setDispatchToProps)(SignIn);

export default SignInContainer;