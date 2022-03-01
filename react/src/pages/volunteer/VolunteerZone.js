import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowCircleDown, FaRegHeart } from "react-icons/fa";
import Navbar from '../../components/navbar';
import SideNavbar from '../../components/sideNavbar';
import BasicTable from '../basicComponents/table/table';
import Profile from '../basicComponents/profile/profile';
import "./volnuteer.css";
import "../manager/manager.css";


function VolunteerZone() {

    // const  = useRef(null);
    const newTravel = useRef(null);
    const nextTravels = useRef(null);
    const lastTravels = useRef(null);
    const feedback = useRef(null);
    const profile = useRef(null);

    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }

    const executeScroll = (e, item) => {
        e.preventDefault();
        item.current.scrollIntoView()
    }

    let volnuteerMenu = ["פידבקים", "נסיעות למחר", "נסיעות קודמות", "פרופיל"]
    // let volnuteerMenu = [נסיעה חדשה", "נסיעות למחר", "נסיעות קודמות" , "פידבקים", "פרופיל"ה"]

    return (
        <>
            <Navbar></Navbar>
            {/* <SideNavbar menu={volnuteerMenu} /> */}
            <div id="mySidenav" className="sidenav">
                <a href="" onClick={(e) => { executeScroll(e, newTravel) }}> נסיעה הבאה</a>
                <a href="" onClick={(e) => { executeScroll(e, nextTravels) }}> נסיעות למחר</a>
                <a href="" onClick={(e) => { executeScroll(e, lastTravels) }}>נסיעות קודמות </a>
                <a href="" onClick={(e) => { executeScroll(e, feedback) }}> פידבקים</a>
                <a href="" onClick={(e) => { executeScroll(e, profile) }}> פרופיל</a>
            </div>
            {/* <div className="volunteerZone">
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
            <h3 className="H3"> הנסיעות שלך למחר :
            </h3>
            <div className="tomorrowDrivesContent">
                כאן תראה מידע על הנסיעות שלך למחר
            </div>
            <div className="approve">
                <Button >
                    אשר הגעה
                </Button>
            </div>
            <div className="yourFeedback">
                <Button onClick={() => handleClick('FeedBack')}>
                    הפידבקים שלך
                </Button>
            </div>
            <div className="preDrives">
                <Button onClick={() => handleClick('PreDrives')}>
                    נסיעות קודמות שלך
                </Button>
            </div>
        </div> */}
            <div className="volnuteerPage">
                <div className="bg_img_volnuteer" ref={newTravel}>
                    <p className="p_textTravel1">נסיעה הבאה:</p>
                    <p className="p_textTravel">22/02/2022</p>
                    <p className="p_textTravel">14:30</p>
                </div>
                <div
                    style={{ marginTop: '-10vh' }}
                    ref={nextTravels}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle">נסיעות למחר</p>
                    <hr />
                    <BasicTable />
                </div>
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={lastTravels}
                ></div>
                <div className="table_volunteer">
                    <p className="p_tableTitle">נסיעות קודמות</p>
                    <hr />
                    <BasicTable />
                </div>
                <div
                    style={{ marginTop: '-10vh', height: "8vh" }}
                    ref={feedback}
                ></div>
                <p className="p_textFeedback">רצינו להגיד תודה</p>
                <hr />
                <div className="feedback_Gallery">
                    <div className="gallery">
                        <a target="_blank">
                            <FaRegHeart style={{ color: '#C71585', fontSize: '200px' }} />
                        </a>
                        <div className="desc">Description of the feedback here</div>
                        <FaArrowCircleDown style={{ fontSize: '30px', marginBottom: '3vh' }} />
                    </div>

                    <div className="gallery">
                        <a target="_blank">
                            <FaRegHeart style={{ color: '#C71585', fontSize: '200px' }} />
                        </a>
                        <div className="desc">Description of the feedback here</div>
                        <FaArrowCircleDown style={{ fontSize: '30px', marginBottom: '3vh' }} />
                    </div>

                    <div className="gallery">
                        <a target="_blank">
                            <FaRegHeart style={{ color: '#C71585', fontSize: '200px' }} />
                        </a>
                        <div className="desc">Description of the feedback here</div>
                        <FaArrowCircleDown style={{ fontSize: '30px', marginBottom: '3vh' }} />
                    </div>
                </div>
                <div
                    ref={profile}>
                    <Profile />
                </div>
                <div className="basic_div"></div>
            </div>
        </>
    );
};
export default VolunteerZone;