import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar';
import BasicTable from '../basicComponents/table/table';
import axios from 'axios';
import SideNavbar from '../../components/sideNavbar';
import "./manager.css";
import "../volunteer/volnuteer.css";

function ManagerZone() {
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

    let managerMenu = ["פרופיל", "יצירת שיבוץ", "מתנדבים חדשים", "מתנדבים ", "נוסעים"]
    return (
        <>
            <Navbar></Navbar>
            <SideNavbar menu={managerMenu} />
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
                <div className="inlay_options">
                    <button className="inlay_button">שיבוץ חדש</button>
                    <button className="inlay_button">שיבוץ קודם</button>
                    <button className="inlay_button">אישור</button>
                </div>
                <BasicTable />
                <div className="table_volunteer">
                    <p className="p_tableTitle1 p_tableTitle">מתנדבים חדשים</p>
                    <hr />
                    <BasicTable />
                </div>
                <div className="table_volunteer">
                    <p className="p_tableTitle2 p_tableTitle">מתנדבים</p>
                    <hr />
                    <BasicTable />
                </div>
                <div className="table_volunteer">
                    <p className="p_tableTitle3 p_tableTitle">נוסעים</p>
                    <hr />
                    <BasicTable />
                </div>
                <div className="basic_div"></div>
            </div>
        </>
    );
};
export default ManagerZone;