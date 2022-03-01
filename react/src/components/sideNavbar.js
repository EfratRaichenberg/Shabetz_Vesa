import React from 'react';
import { useNavigate } from "react-router-dom";
import "./navbar.css"


function SideNavbar(props) {
    const navigate = useNavigate();
    const handleClick = e => {
        navigate("/" + e);
    }
    return (
        <>
            <div id="mySidenav" className="sidenav">
                {props.menu.map((item) => {
                    return <a href="#"
                    //   onClick={() => handleClick(item.pass)}
                    >{item}</a>
                })}
            </div>
        </>
    );
};

export default SideNavbar;
