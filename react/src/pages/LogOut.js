import React from 'react';
import Navbar from '../components/navbar';
import { Provider, connect } from 'react-redux';

function LogOut(props) {
    return (
        <>
            <Navbar></Navbar>
            <div class="form-body">
                <div class="row">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items" >
                                <h3> להתראות בנסיעה הבאה</h3>
                            </div>
                        </div>
                    </div>
                </div>
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
const LogOutContainer = connect(mapStateToProps, setDispatchToProps)(LogOut);

export default LogOutContainer;