import React from 'react';
import RegisterForm from './RegisterForm'
//import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
function HomePage() {
    //const history = useHistory();
    // const handleClick = () => {
    //     let path = "/RegisterForm";
    //     //navigate('/RegisterForm');
    //     history.push(path);
    // }
    return (
        <div>
            <Button >
                {/* onClick={handleClick()} */}
                <Link to="/RegisterForm">RegisterForm </Link>
                sign in
            </Button>
        </div>
    );
}
export default HomePage;