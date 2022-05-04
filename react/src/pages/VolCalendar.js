import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';
import { connect } from 'react-redux';

function VolCalendar(props) {
    const [VolCalendarState, setVolCalendarState] = useState(
        {
            userId: props.userDetails.user.UserId,
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thuersday: false,
            friday: false,
            sundayHour: '',
            sundayEndHour: '',
            mondayHour: '',
            mondayEndHour: '',
            tuesdayHour: '',
            tuesdayEndHour: '',
            wednesdayHour: '',
            wednesdayEndHour: '',
            thuersdayHour: '',
            thuersdayEndHour: '',
            fridayHour: '',
            fridayEndHour: ''
        }
    );
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert (VolCalendarState.userId);
        axios.post(`http://localhost:3001/addCalendar`, {
            "volunteer_id": VolCalendarState.userId,
            "sunday": VolCalendarState.sunday,
            "monday": VolCalendarState.monday,
            "tuesday": VolCalendarState.tuesday,
            "wednesday": VolCalendarState.wednesday,
            "thuersday": VolCalendarState.thuersday,
            "friday": VolCalendarState.friday,
            "sundayHour": VolCalendarState.sundayHour,
            "sundayEndHour": VolCalendarState.sundayEndHour,
            "mondayHour": VolCalendarState.mondayHour,
            "mondayEndHour": VolCalendarState.mondayEndHour,
            "tuesdayHour": VolCalendarState.tuesdayHour,
            "tuesdayEndHour": VolCalendarState.tuesdayEndHour,
            "wednesdayHour": VolCalendarState.wednesdayHour,
            "wednesdayEndHour": VolCalendarState.wednesdayEndHour,
            "thuersdayHour": VolCalendarState.thuersdayHour,
            "thuersdayEndHour": VolCalendarState.thuersdayEndHour,
            "fridayHour": VolCalendarState.fridayHour,
            "fridayEndHour": VolCalendarState.fridayEndHour
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
        handleClick('');
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
                                    <h2>זמני פעילות</h2>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={VolCalendarState.sunday} id="invalidCheck"
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, sunday: true })} />
                                            <label class="form-check-label">יום ראשון</label>
                                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">משעה</label>
                                            <input class="form-control" type="time" name="name" placeholder="משעה" value={VolCalendarState.sundayHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, sundayHour: e.target.value })} />
                                            <div class="valid-feedback">Username field is valid!</div>
                                            <div class="invalid-feedback">Username field cannot be blank!</div>
                                        </div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">עד שעה</label>
                                            <input class="form-control" type="time" name="name" placeholder="עד שעה" value={VolCalendarState.sundayEndHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, sundayEndHour: e.target.value })} />
                                            <div class="valid-feedback">Username field is valid!</div>
                                            <div class="invalid-feedback">Username field cannot be blank!</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={VolCalendarState.monday} id="invalidCheck"
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, monday: true })} />
                                            <label class="form-check-label">יום שני</label>
                                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">משעה</label>
                                            <input class="form-control" type="time" name="name" placeholder="משעה" value={VolCalendarState.mondayHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, mondayHour: e.target.value })} />
                                            <div class="valid-feedback">street field is valid!</div>
                                            <div class="invalid-feedback">street field cannot be blank!</div>
                                        </div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">עד שעה</label>
                                            <input class="form-control" type="time" name="name" placeholder="עד שעה" value={VolCalendarState.mondayEndHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, mondayEndHour: e.target.value })} />
                                            <div class="valid-feedback">street field is valid!</div>
                                            <div class="invalid-feedback">street field cannot be blank!</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={VolCalendarState.Hour} id="invalidCheck"
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, tuesday: true })} />
                                            <label class="form-check-label">יום שלישי</label>
                                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">משעה</label>
                                            <input class="form-control" type="time" name="name" placeholder="משעה" value={VolCalendarState.tuesdayHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, tuesdayHour: e.target.value })} />
                                            <div class="valid-feedback">city field is valid!</div>
                                            <div class="invalid-feedback">city field cannot be blank!</div>
                                        </div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">עד שעה</label>
                                            <input class="form-control" type="time" name="name" placeholder="עד שעה" value={VolCalendarState.tuesdayEndHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, tuesdayEndHour: e.target.value })} />
                                            <div class="valid-feedback">city field is valid!</div>
                                            <div class="invalid-feedback">city field cannot be blank!</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={VolCalendarState.wednesday} id="invalidCheck"
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, wednesday: true })} />
                                            <label class="form-check-label">יום רביעי</label>
                                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">משעה</label>
                                            <input class="form-control" type="time" id="CarLeaflet" name="name" placeholder="משעה" value={VolCalendarState.wednesdayHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, wednesdayHour: e.target.value })} />
                                            <div class="valid-feedback">email field is valid!</div>
                                            <div class="invalid-feedback">email field cannot be blank!</div>
                                        </div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">עד שעה</label>
                                            <input class="form-control" type="time" id="CarLeaflet" name="name" placeholder="עד שעה" value={VolCalendarState.wednesdayEndHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, wednesdayEndHour: e.target.value })} />
                                            <div class="valid-feedback">email field is valid!</div>
                                            <div class="invalid-feedback">email field cannot be blank!</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={VolCalendarState.thuersday} id="invalidCheck"
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, thuersday: true })} />
                                            <label class="form-check-label">יום חמישי</label>
                                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">משעה</label>
                                            <input class="form-control" type="time" id="CarLeaflet" name="name" placeholder="משעה" value={VolCalendarState.thuersdayHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, thuersdayHour: e.target.value })} />
                                            <div class="valid-feedback">email field is valid!</div>
                                            <div class="invalid-feedback">email field cannot be blank!</div>
                                        </div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">עד שעה</label>
                                            <input class="form-control" type="time" id="CarLeaflet" name="name" placeholder="עד השעה" value={VolCalendarState.thuersdayEndHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, thuersdayEndHour: e.target.value })} />
                                            <div class="valid-feedback">email field is valid!</div>
                                            <div class="invalid-feedback">email field cannot be blank!</div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={VolCalendarState.fridayHour} id="invalidCheck"
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, friday: true })} />
                                            <label class="form-check-label">יום שישי</label>
                                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">משעה</label>
                                            <input class="form-control" type="time" id="CarLeaflet" name="name" placeholder="משעה" value={VolCalendarState.fridayHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, fridayHour: e.target.value })} />
                                            <div class="valid-feedback">email field is valid!</div>
                                            <div class="invalid-feedback">email field cannot be blank!</div>
                                        </div>
                                        <div class="col-md-12">
                                        <label class="form-check-label">עד שעה</label>
                                            <input class="form-control" type="time" id="CarLeaflet" name="name" placeholder="עד השעה" value={VolCalendarState.fridayEndHour}
                                                onChange={(e) => setVolCalendarState({ ...VolCalendarState, fridayENdHour: e.target.value })} />
                                            <div class="valid-feedback">email field is valid!</div>
                                            <div class="invalid-feedback">email field cannot be blank!</div>
                                        </div>
                                    </div>
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

const VolCalendarContainer = connect(mapStateToProps, setDispatchToProps)(VolCalendar);

export default VolCalendarContainer;
