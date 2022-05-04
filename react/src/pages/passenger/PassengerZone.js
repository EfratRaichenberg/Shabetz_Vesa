import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar';
import { connect } from 'react-redux';
import DrivesTable from '../basicComponents/table/drivesTable';
import BasicTable from '../basicComponents/table/table';
import OrderDrive from '../OrderDrive.js'
import "../../components/navbar.css";
import "./passenger.css";
import "../volunteer/volnuteer.css"
import "../manager/manager.css"
import Profile from '../basicComponents/profile/profile';

function PassengerZone(props) {
    const [data, setData] = useState([{}]);
    const [historyData, setHistoryData] = useState([{}, {}, {}, {}, {}]);
    const [passengerState, setPassengerState] = useState(
        {
            user_id: props.userDetails.user.UserId,
            Hour: '',
            Hospital: '',
            Source: '',
            place_number: '',
            Date: ''
        }
    );
    const handleSubmit = (event) => {
        var startTime = new Date();
        console.log(startTime);
        event.preventDefault();
        axios.post(`http://localhost:3001/addOrder`, {
            "user_id": passengerState.user_id,
            "Hour": passengerState.Hour,
            "Adrress": passengerState.Source,
            "Hospital": passengerState.Hospital,
            "place_number": passengerState.place_number,
            "Date": startTime
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("הזמנתך נקלטה בהצלחה");
    };

    const create = useRef(null);
    const lastTravels = useRef(null);
    const nextTravels = useRef(null);
    const profile = useRef(null);

    const executeScroll = (e, item) => {
        e.preventDefault();
        item.current.scrollIntoView()
    }

    return (
        <>
            <Navbar></Navbar>
            <div id="mySidenav" className="sidenav">
                <a href="" onClick={(e) => { executeScroll(e, create) }}>הזמנת נסיעה</a>
                <a href="" onClick={(e) => {
                    executeScroll(e, nextTravels);
                    e.preventDefault();
                    axios.get(`http://localhost:3001/passengerDrives/${passengerState.user_id}`)
                        .then(response => {
                            console.log(response.data);
                            setData(response.data);
                        })
                    .catch(err => console.warn(err));
                    console.log(data);
                }}>הנסיעה שלי למחר</a>
                <a href="" onClick={(e) => {
                    executeScroll(e, lastTravels);
                    e.preventDefault();
                    axios.get(`http://localhost:3001/passengerHistoryDrives/${passengerState.user_id}`)
                        .then(response => {
                            console.log(response.data);
                            setHistoryData(response.data);
                        })
                        .catch(err => console.warn(err));
                    console.log(historyData);
                }}> נסיעות קודמות</a>
                <a href="" onClick={(e) => { executeScroll(e, profile) }}> פרופיל</a>
            </div>
            <div className="passengerPage">
                <div
                    style={{ height: '10vh' }}
                    ref={create}
                ></div>
                <div className="orderDrive"
                >
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
                                                <input class="form-control" type="text" name="name" placeholder="יעד" required value={passengerState.Hospital}
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
                </div>
                <div
                    style={{ height: '-10vh' }}
                    ref={nextTravels}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle1 p_tableTitle">נסיעות למחר</p>
                    <hr />
                    {data.length > 0 &&
                        <DrivesTable drivesdata={data}></DrivesTable>
                    }
                    {data.length == 0 &&
                        <p className="p_textFeedback">עדיין אין לך נסיעות למחר</p>
                    }

                </div>
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={lastTravels}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle1 p_tableTitle">נסיעות קודמות</p>
                    <hr />
                    {historyData.length>0&&
                    <BasicTable data={historyData} />}
                    {historyData.length == 0 &&
                        <p className="p_textFeedback">עדיין אין לך נסיעות קודמות</p>
                    }
                </div>
                <div
                    ref={profile}>
                    <Profile />
                </div>
                <div className="basic_div"></div>
                <center>
                    <strong>Powered by <a className="powered" href="" target="_blank">Efrat & Moriya</a></strong>
                </center>
                <br></br>
                <br></br>
            </div>
        </>
    );
};

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

const PassengerZoneContainer = connect(mapStateToProps, setDispatchToProps)(PassengerZone);

export default PassengerZoneContainer;