import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import Navbar from '../components/navbar';
import { connect } from 'react-redux';
function PasPreperence(props) {
    const [preferenceState, setPreferenceState] = useState(
        {
            userId:props.userDetails.user.UserId,
            leaflet: 0,
            familiar: 0,
            space: 0
        }
    );
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/addPreference`, {
            "userId":preferenceState.userId ,
            "leaflet": preferenceState.leaflet,
            "familiar": preferenceState.familiar,
            "space": preferenceState.space
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
        handleClick('PassengerZone');
    };
    return (
        <>
            <Navbar></Navbar>
            <div class="form-body">
                <div class="row">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3> הרשמה למשפחת שבץ וסע </h3>
                                <form class="requires-validation" novalidate onSubmit={handleSubmit}>
                                    <h4>* העדפות</h4>
                                    <br></br>
                                    <h5>מעלון ברכב</h5>
                                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setPreferenceState({ ...preferenceState, leaflet: e.target.value })}>
                                        <option selected>      סמן את רמת העדפה</option>
                                        <option value="1">נמוך</option>
                                        <option value="2">בינוני</option>
                                        <option value="3">גבוה</option>
                                    </select>
                                    <br></br>
                                    <h5>מתנדב מוכר</h5>
                                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setPreferenceState({ ...preferenceState, familiar: e.target.value })}>
                                        <option selected>       סמן את רמת העדפה</option>
                                        <option value="1">נמוך</option>
                                        <option value="2">בינוני</option>
                                        <option value="3">גבוה</option>
                                        
                                    </select>
                                    <br></br>
                                    <h5>מקום ברכב</h5>
                                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setPreferenceState({ ...preferenceState, space: e.target.value })}>
                                        <option selected>      סמן את רמת העדפה</option>
                                        <option value="1">נמוך</option>
                                        <option value="2">בינוני</option>
                                        <option value="3">גבוה</option>
                                    </select>
                                    <div class="col-md-12 mt-3">
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

const PasPreperenceContainer = connect(mapStateToProps, setDispatchToProps)(PasPreperence);

export default PasPreperenceContainer;
