import React, { useRef , useState } from 'react';
import "./profile.css";
import { FaUser } from "react-icons/fa";
import { connect } from 'react-redux';
import axios from 'axios';


function Profile(props) {
	const userId = props.userDetails.user.UserId;
	const [userState, setUserState] = useState(
        {
            
            Name: props.userDetails.user.UserNAme,
			password:props.userDetails.user.password,
            Type:props.userDetails.user.Type,
            street: props.userDetails.user.Street,
            neighborhood: props.userDetails.user.Neighborhood,
            city: props.userDetails.user.City,
            phone: props.userDetails.user.phone,
            Mail: props.userDetails.user.mail,
            NumPlace:props.userDetails.user.Num_places,
            CarLeaflet:props.userDetails.user.Car_leaflet,
            Casual_status:props.userDetails.user.Casual_status,
            ApprovedStatus:props.userDetails.user.Approved_status
        }
    );
	const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/updateUser`, {
			"userId":userId,
            "Name": userState.Name,
            "Password": userState.password,
            "Type":userState.Type,
            "Phone_number": userState.phone,
            "Mail": userState.Mail,
            "City": userState.city,
            "Neighborhood": userState.neighborhood,
            "Street": userState.street,
            "Num_places":userState.NumPlace,
            "Car_leaflet":userState.CarLeaflet,
            "Casual_status": userState.Casual_status, 
            "Approved_status":userState.ApprovedStatus
        })
            .then(response => response.status)
            .catch(err => console.warn(err));
        alert("פרטיך עודכנו בהצלחה");

    };
	return (
		<>
			<hr />
			<div className="container">
				<div className="row profile">
					<div className="col-md-3">
						<div className="profile-sidebar">
							<div className="profile-userpic">
								<FaUser style={{ fontSize: '200px', marginBottom: '3vh' }} />
							</div>

							<div className="profile-usertitle">
								<div className="profile-usertitle-name">
									 פרופיל
								</div>
								{/* <div className="profile-usertitle-job">
									מתנדב
								</div> */}
							</div>

							<div className="main-login-form">
								<div className="login-group">
									<div className="form-group">
										<label for="lg_username" className="sr-only"> שם</label>
										<input type="text" className="form-control" id="lg_username" name="lg_username" value={userState.Name} 
										onChange={(e) => setUserState({ ...userState, Name: e.target.value })}/>
									</div>
									<br/>
									<div className="form-group">
										<label for="lg_password" className="sr-only">סיסמא</label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" value={userState.password}
										onChange={(e) => setUserState({ ...userState, password: e.target.value })}/> 
									</div>
									<br/>
									<div className="form-group">
										<label for="lg_password" className="sr-only">עיר</label>
										<input type="text" className="form-control" id="lg_password" name="lg_password" value={userState.city}
										onChange={(e) => setUserState({ ...userState, city: e.target.value })}/> 
									</div>
									<br/>
									<div className="form-group">
										<label for="lg_password" className="sr-only">שכונה</label>
										<input type="text" className="form-control" id="lg_password" name="lg_password" value={userState.neighborhood}
										onChange={(e) => setUserState({ ...userState, neighborhood: e.target.value })} />
									</div>
									<br/>
									<div className="form-group">
										<label for="lg_password" className="sr-only">רחוב</label>
										<input type="text" className="form-control" id="lg_password" name="lg_password" value={userState.street} 
										onChange={(e) => setUserState({ ...userState, street: e.target.value })}/>
									</div>
									<br/>
									<div className="form-group">
										<label for="lg_password" className="sr-only">מייל</label>
										<input type="text" className="form-control" id="lg_password" name="lg_password" value={userState.Mail}
										onChange={(e) => setUserState({ ...userState, Mail: e.target.value })} />
									</div>
									<br/>
									<div className="form-group">
										<label for="lg_password" className="sr-only">טלפון</label>
										<input type="text" className="form-control" id="lg_password" name="lg_password" value={userState.phone}
										onChange={(e) => setUserState({ ...userState, phone: e.target.value })} />
									</div>
									<br/>
									{userState.Type=='Volunteer'&&
									<div className="form-group">
										<label for="lg_password" className="sr-only">מספר מקומות ברכב</label>
										<input type="text" className="form-control" id="lg_password" name="lg_password" value={userState.NumPlace}
										onChange={(e) => setUserState({ ...userState, NumPlace: e.target.value })} />
									</div>
									}
								    <br></br>
									{userState.Type=='Volunteer'&&
									<div className="form-group">
										<label for="lg_password" className="sr-only">מעלון ברכב?</label>
										<input type="checkbox" className="form-check-input" id="lg_password" name="lg_password" value={userState.CarLeaflet}
										onChange={(e) => setUserState({ ...userState, NumPlace: e.target.value })} />
									</div>
									}
									{/* <div className="form-group login-group-checkbox">
						<input type="checkbox" id="lg_remember" name="lg_remember"/>
						<label for="lg_remember">remember</label>
					</div> */}
								</div>
							</div>
							<div className="profile-userbuttons">
								{/* <button type="button" className="btn btn-success btn-sm edit_button">עריכה</button> */}
								<button type="button" className="btn btn-danger btn-sm save_button" onClick={handleSubmit}>שמירה</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<center>
				<strong>Powered by <a className="powered" href="" target="_blank">Efrat & Moriya</a></strong>
			</center>
			<br></br>
			<br></br>
		</>
	)
}
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

const ProfileContainer = connect(mapStateToProps, setDispatchToProps)(Profile);

export default ProfileContainer;