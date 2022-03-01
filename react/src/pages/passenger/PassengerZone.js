import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar';
import { connect } from 'react-redux';
import BasicTable from '../basicComponents/table/table';
import OrderDrive from '../OrderDrive.js'
import "../../components/navbar.css";
import "./passenger.css";
import "../volunteer/volnuteer.css"
import "../manager/manager.css"

function PassengerZone() {

    const [passengerState, setPassengerState] = useState(
        {
            Hour: '',
            Hospital: '',
            Source:''
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3001/orders/addNewOrderDrive`, {
            "user_id": '',
            "Hour": passengerState.Hour,
            "Adrress": passengerState.Source,
            "Hospital":passengerState.Hospital
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("insert successfuly");
    };

    const create = useRef(null);
    const lastTravels = useRef(null);
  
    const executeScroll = (e, item) => {
        e.preventDefault();
        item.current.scrollIntoView()
    }

    return (
        <>
            <Navbar></Navbar>
            <div id="mySidenav" className="sidenav">
                <a href="" onClick={(e) => {executeScroll(e, create)}}>הזמנת נסיעה</a>
                <a href="" onClick={(e) => {executeScroll(e, lastTravels)}}> נסיעות קודמות</a>
                {/* <a href="" onClick={(e) => {executeScroll(e, volnuteers)}}> פרופיל</a> */}
                {/* <a href="" onClick={(e) => {executeScroll(e, passengers)}}>נוסעים </a> */}
                </div>
            <div className="passengerPage">
                <div 
                style={{height: '10vh'}} 
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
                                    <input class="form-control" type="text" name="name" placeholder="בית חולים" required value={passengerState.Hospital}
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
        </div>        </div>
        <div 
                style={{height: '-10vh'}} 
                ref={lastTravels}
                ></div>
        <div className="table_volunteer" >
                    <p className="p_tableTitle1 p_tableTitle">נסיעות קודמות</p>
                    <hr />
                    <BasicTable />
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

export default PassengerZone;