import React, { useRef , useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowCircleDown, FaRegHeart } from "react-icons/fa";
import Navbar from '../../components/navbar';
import SideNavbar from '../../components/sideNavbar';
import BasicVolTable from '../basicComponents/table/volTable';
import Profile from '../basicComponents/profile/profile';
import "./volnuteer.css";
import "../manager/manager.css";
import axios from 'axios';
import { connect } from 'react-redux';


function VolunteerZone(props) {
    const [data, setData]=useState([{},{},{},{},{}]);
    const [historyData, setHistoryData]=useState([{},{},{},{},{}]);
    const userId = props.userDetails.user.UserId;
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

    return (
        <>
            <Navbar></Navbar>
            {/* <SideNavbar menu={volnuteerMenu} /> */}
            <div id="mySidenav" className="sidenav">
                <a href="" onClick={(e) => { executeScroll(e, nextTravels)
                e.preventDefault();
                axios.get(`http://localhost:3001/volunteerDrives/${userId}`)
                    .then(response => {
                        console.log(response.data);
                        setData(response.data);
                    })
                    .catch(err => console.warn(err));
                    console.log(data.length);
                 }}> נסיעות למחר</a>
                <a href="" onClick={(e) => {
                    executeScroll(e, lastTravels)
                    e.preventDefault();
                    axios.get(`http://localhost:3001/volunteerHistoryDrives/${userId}`)
                        .then(response => {
                            console.log(response.data);
                            setHistoryData(response.data);
                        })
                    .catch(err => console.warn(err));
                    console.log(historyData.length);
                }}>נסיעות קודמות </a>
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
                <div
                    // style={{ marginTop: '-10vh' }}
                    ref={nextTravels}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle">נסיעות למחר</p>
                    <hr />
                    {data.length>0&&
                    <BasicVolTable data={data} />
                    }
                    {data.length==0&&
                    <p className="p_textFeedback">עדיין אין לך נסיעות למחר</p>
                    }
                </div>
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={lastTravels}
                ></div>
                <div className="table_volunteer">
                    <p className="p_tableTitle">נסיעות קודמות</p>
                    <hr />
                    {historyData.length>0&&
                    <BasicVolTable data={historyData} />}
                    {historyData.length==0&&
                    <p className="p_textFeedback">עדיין אין לך נסיעות קודמות</p>
                    }
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
                        <div className="desc">תודה רבה על הנסיעה! נהנו מאד מהיחס ומהשרות.</div>
                        <FaArrowCircleDown style={{ fontSize: '30px', marginBottom: '3vh' }} />
                    </div>

                    <div className="gallery">
                        <a target="_blank">
                            <FaRegHeart style={{ color: '#C71585', fontSize: '200px' }} />
                        </a>
                        <div className="desc">תודה רבה רבה! השרות היה מדהים!</div>
                        <FaArrowCircleDown style={{ fontSize: '30px', marginBottom: '3vh' }} />
                    </div>

                    <div className="gallery">
                        <a target="_blank">
                            <FaRegHeart style={{ color: '#C71585', fontSize: '200px' }} />
                        </a>
                        <div className="desc">תודה רבה על היחס המדהים!</div>
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

const VolunteerZoneContainer = connect(mapStateToProps, setDispatchToProps)(VolunteerZone);

export default VolunteerZoneContainer;