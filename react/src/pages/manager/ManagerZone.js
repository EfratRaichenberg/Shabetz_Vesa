import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar';
import AllPassTable from '../basicComponents/table/AllPassTable';
import AllVolTable from '../basicComponents/table/AllVolTable';
import AllNewVolTable from '../basicComponents/table/AllNewVolTable';
import axios from 'axios';
import "./manager.css";
import "../volunteer/volnuteer.css";
import "../../components/navbar.css";
import "../basicComponents/profile/profile.css";
import Profile from '../basicComponents/profile/profile';
import DriveForToTable from '../basicComponents/table/DriveForToTable'


function ManagerZone() {
    const [data, setData] = useState([{}, {}, {}, {}, {}, {}, {}]);
    const [newVolData, setnewVolData] = useState([{}, {}, {}, {}, {}, {}, {}]);
    const [Voldata, setVolData] = useState([{}, {}, {}, {}, {}, {}, {}]);
    const [names, setNames] = useState([{}, {}, {}, {}, {}, {}, {}]);
    const [drivesData, setDrivesData] = useState([{}, {}, {}, {}, {}, {}, {},{},{},{},{},{},{},{},{}]);
    const [length , setLength]=useState(0);
    const create = useRef(null);
    const passengers = useRef(null);
    const volnuteers = useRef(null);
    const newVolnuteers = useRef(null);
    const profile = useRef(null);

    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }

    const executeScroll = (e, item) => {
        e.preventDefault();
        item.current.scrollIntoView()
    }

    function calcSchedule()
    {
        setLength(1);
        axios.get(`http://localhost:3001/calcSchedule`)
            .then(response => {
                console.log(response.data);
                setDrivesData(response.data);
            })
            .catch(err => console.warn(err));
        console.log(drivesData);
        axios.get(`http://localhost:3001/Names`)
        .then(response => {
            console.log(response.data);
            setNames(response.data);
        })
        .catch(err => console.warn(err));
        console.log(names);
    }

    // let managerMenu = ["????????????", "?????????? ??????????", "?????????????? ??????????", "?????????????? ", "????????????"]
    return (
        <>
            <Navbar></Navbar>
            {/* <SideNavbar menu={managerMenu} /> */}
            <div id="mySidenav" className="sidenav">
                <a href="" onClick={(e) => { executeScroll(e, create) }}>?????????? ??????????</a>
                <a href="" onClick={(e) => {
                    executeScroll(e, newVolnuteers)
                    e.preventDefault();
                    axios.get(`http://localhost:3001/newVolunteer`)
                        .then(response => {
                            console.log(response.data);
                            setnewVolData(response.data);
                        })
                        .catch(err => console.warn(err));
                    console.log(newVolData);
                }}>?????????????? ??????????</a>
                <a href="" onClick={(e) => {
                    executeScroll(e, volnuteers)
                    e.preventDefault();
                    axios.get(`http://localhost:3001/getAllVolunteers`)
                        .then(response => {
                            console.log(response.data);
                            setVolData(response.data);
                        })
                        .catch(err => console.warn(err));
                    console.log(Voldata);
                }}> ??????????????</a>
                <a href="" onClick={(e) => {
                    executeScroll(e, passengers);
                    e.preventDefault();
                    axios.get(`http://localhost:3001/getAllPassengers`)
                        .then(response => {
                            console.log(response.data);
                            setData(response.data);
                        })
                        .catch(err => console.warn(err));
                    console.log(data);
                }}>???????????? </a>
                <a href="" onClick={(e) => { executeScroll(e, profile) }}> ????????????</a>
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
                    ????????????
                </Button>
            </div>
            <div className="Home">
                <Button onClick={() => handleClick('')}>
                    ??????
                </Button>
            </div>
            <div className="logOut ">
                <Button onClick={() => handleClick('LogOut')}>
                    ??????????
                </Button>
            </div>
            <div className="Assign">
                <Button 
                onClick={() => handleClick('Assign')}>
                    ?????????? ??????????
                </Button>
            </div>
            <div className="approveVolunteers">
                <Button 
                onClick={handleClickApprove}>
                    ?????????? ?????????????? ??????????
                </Button>
            </div>
            <div className="aprroveDrives">
                <Button>
                    ?????????? ???????????? ????????
                </Button>
            </div>
            <div className="viewRports">
                <Button>
                    ???????? ????????????
                </Button>
            </div> */}
            {/* </div> */}
            <div className="managerPage">
                <div className="inlay_options"
                    ref={create}
                >
                    <button className="inlay_button" onClick={calcSchedule}>?????????? ??????</button>
                    {length!=0&&
                    <button className="inlay_button">?????????????? ??????????????</button>}
                    {length!=0&&
                    <DriveForToTable/>}
                    {length!=0&&
                    <button className="inlay_button">??????????</button>}
                </div>
                {/* <BasicTable /> */}
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={newVolnuteers}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle1 p_tableTitle" >?????????????? ??????????</p>
                    <hr />
                    <AllNewVolTable newVolData={newVolData}/>
                </div>
                <div
                    style={{ marginTop: '-10vh', height: '2vh' }}
                    ref={volnuteers}
                ></div>
                <div className="table_volunteer" >
                    <p className="p_tableTitle2 p_tableTitle">??????????????</p>
                    <hr />
                    <AllVolTable Voldata={Voldata} />
                </div>
                <div
                    style={{ marginTop: '-10vh' }}
                    ref={passengers}
                ></div>
                <div className="table_volunteer">
                    <p className="p_tableTitle3 p_tableTitle">????????????</p>
                    <hr />
                    <AllPassTable data={data} />
                </div>
                <div className="basic_div"></div>
                <div
                    ref={profile}>
                    <Profile />
                </div>
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