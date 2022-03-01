import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar';
import BasicTable from '../basicComponents/table/table';
import axios from 'axios';
import SideNavbar from '../../components/sideNavbar';
import "./manager.css";
import "../volunteer/volnuteer.css";
import "../../components/navbar.css";
import "../basicComponents/profile/profile.css";


function ManagerZone() {

    const create = useRef(null);
    const passengers = useRef(null);
    const volnuteers = useRef(null);
    const newVolnuteers = useRef(null);
    const profile = useRef(null);

    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }

    const handleClickApprove = (event) => {
        alert("hi");
        event.preventDefault();
        alert("hello");
        axios.get(`http://localhost:3001/manager/getNewVolunteers`)
            .then(response => {
                if (response.status === 200) {
                    alert(response);
                }
            })
            .catch(err => console.warn(err));
    };
    const executeScroll = (e, item) => {
        e.preventDefault();
        item.current.scrollIntoView()
    }

    // let managerMenu = ["פרופיל", "יצירת שיבוץ", "מתנדבים חדשים", "מתנדבים ", "נוסעים"]
    return (
        <>
            <Navbar></Navbar>
            {/* <SideNavbar menu={managerMenu} /> */}
            <div id="mySidenav" className="sidenav">
                <a href="" onClick={(e) => { executeScroll(e, create) }}>יצירת שיבוץ</a>
                <a href="" onClick={(e) => { executeScroll(e, newVolnuteers) }}>מתנדבים חדשים</a>
                <a href="" onClick={(e) => { executeScroll(e, volnuteers) }}> מתנדבים</a>
                <a href="" onClick={(e) => { executeScroll(e, passengers) }}>נוסעים </a>
                {/* {managerMenu.map((item) => {
                    return <a href="#"
                    // onClick={(e) => executeScroll(e.target.ref)}
                    onClick={executeScroll({item}) }
                    >{item}</a> */}
                {/* })} */}
            </div>
            {/* <div className="managerZone">
            <div className="profile">
                <Button>
                    פרופיל
                </Button>
            </div>
            <div className="Home">
                <Button onClick={() => handleClick('')}>
                    בית
                </Button>
            </div>
            <div className="logOut ">
                <Button onClick={() => handleClick('LogOut')}>
                    יציאה
                </Button>
            </div>
            <div className="Assign">
                <Button 
                onClick={() => handleClick('Assign')}>
                    שיבוץ בבקשה
                </Button>
            </div>
            <div className="approveVolunteers">
                <Button 
                onClick={handleClickApprove}>
                    אישור מתנדבים חדשים
                </Button>
            </div>
            <div className="aprroveDrives">
                <Button>
                    אישור נסיעות למחר
                </Button>
            </div>
            <div className="viewRports">
                <Button>
                    צפיה בדוחות
                </Button>
            </div> */}
            {/* </div> */}
            <div className="managerPage">
                <div className="inlay_options"
                    ref={create}
                >
                    <button className="inlay_button">שיבוץ חדש</button>
                    <button className="inlay_button">שיבוץ קודם</button>
                    <button className="inlay_button">אישור</button>
                </div>
                <BasicTable />
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={newVolnuteers}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle1 p_tableTitle" >מתנדבים חדשים</p>
                    <hr />
                    <BasicTable />
                </div>
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={volnuteers}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle2 p_tableTitle">מתנדבים</p>
                    <hr />
                    <BasicTable />
                </div>
                <div
                    style={{ marginTop: '-10vh' }}
                    ref={passengers}
                ></div>
                <div className="table_volunteer">
                    <p className="p_tableTitle3 p_tableTitle">נוסעים</p>
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
export default ManagerZone;