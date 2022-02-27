import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/navbar';
import { connect } from 'react-redux';

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
        axios.get(`http://localhost:3001/signIn/${userState.Name}/${userState.Password}`)
            .then(response => {
                if (response.status === 200) {
                    alert(response.data[0])
                    props.setUser({
                        user: {
                            UserId: response.data[0].user_id,
                            UserNAme: response.data[0].Name,
                            password: response.data[0].Password,
                            Type: response.data[0].Type,
                            mail: response.data[0].Mail,
                            phone: response.data[0].Phone_number,
                            City: response.data[0].City,
                            Neighborhood: response.data[0].Neighborhood,
                            Street: response.data[0].Street
                        }
                    })
                    console.log(props.userDetails);
                    setNavigateTo(true)
                }
            })
            .catch(err => console.warn(err));
    };
        if (navigateTo) {
           if(props.userDetails.user.Type==="Volunteer")
               navigate('/VolunteerZone')
           if(props.userDetails.user.Type==="Passenger")
              navigate('/PassengerZone');
           if(props.userDetails.user.Type==="Admin")
              navigate('/ManagerZone');
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