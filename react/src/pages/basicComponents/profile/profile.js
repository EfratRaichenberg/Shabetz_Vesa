import React from 'react';
import "./profile.css";
import { FaUser } from "react-icons/fa";


function Profile() {
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
										<label for="lg_username" className="sr-only"> </label>
										<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="שם פרטי ומשפחה" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="סיסמא" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="כתובת" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="מיקוד" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="פלאפון" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="אימייל" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="סוג רכב" />
									</div>
									<div className="form-group">
										<label for="lg_password" className="sr-only"></label>
										<input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="סטטוס" />
									</div>
									{/* <div className="form-group login-group-checkbox">
						<input type="checkbox" id="lg_remember" name="lg_remember"/>
						<label for="lg_remember">remember</label>
					</div> */}
								</div>
							</div>
							<div className="profile-userbuttons">
								{/* <button type="button" className="btn btn-success btn-sm edit_button">עריכה</button> */}
								<button type="button" className="btn btn-danger btn-sm save_button">שמירה</button>
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
export default Profile;
