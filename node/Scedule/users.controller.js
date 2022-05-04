C:\Users\1\Shabetz_Vesa\node\controllers\users.controller.js


const { response } = require("express");
const dbConnection = require("../mySql/mysql");

const getAllUsers = async function (req, res, next) {
   let query = "select * from users";
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("users:", response);
      res.send(response);
   });
}

const getPassengersDetailsForNextSchedule = async function (req, res, next) {
   const { user_id } = req.params;
   let query = `SELECT user_id ,Phone_number ,Mail ,City ,Neighborhood ,Street FROM users WHERE user_id = ${user_id} && Type= ${Passenger}`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("users:", response);
      return response;
   });
}

const getVolunteersDetailsForNextSchedule = async function (req, res, next) {
   const { volunteersId } = req.params;
   let query = `SELECT user_id ,Phone_number ,Mail ,City ,Neighborhood ,Street, Num_places, Car_leaflet FROM users WHERE user_id in ${volunteersId} && Casual_status=${'0'} && Approved_status=${'1'}`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("users:", response);
      return response;
   });
}

const getActiveVolunteersByDate = async function (req, res, next) {
   const { day } = req.params;
   // i am here
   //add finish hour
   let query = `SELECT volunteer_id, ${day}Hour, ${day}EndHour FROM volunteer_schedule WHERE ${day}=1`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("users:", response);
      return response;
   });
}


const addUser = async function (req, res, next) {
   const { Name, Password, Type, Street, City, Neighborhood, Phone_number, Mail, Num_places, Car_leaflet, Casual_status, Approved_status } = req.body;
   var query = `INSERT INTO users (Name ,Password,Type,Phone_number,Mail,City,Neighborhood, Street,Num_places,Car_leaflet,Casual_status,Approved_status) VALUES ('${Name}', '${Password}', '${Type}', '${Street}', '${City}', '${Neighborhood}','${Phone_number}', '${Mail}', ${Num_places}, ${Car_leaflet}, ${Casual_status}, ${Approved_status}) `;
   dbConnection.query(query, async (err, response) => {
      if (err) {
         console.log(err);
         res.send(err.message);
      }
      else {
         res.send({ insertId: response.insertId });
      }
   })
}


const updateUser = async function (req, res, next) {
   const { user_id, name, password, email } = req.body;
   var query = `UPDATE users SET Name = '${name}', Password =
                         '${password}' , Mmail = '${email}'
                          WHERE user_id = ${user_id}`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log(err);
         res.error(null, err);
      }
      else {
         res.send({ insertId: response.insertId });
         console.log("update user!!!");
      }
   })
}

const signIn = async function (req, res, next) {
   const { Name, Password } = req.params;
   var query = `SELECT * FROM users WHERE Name='${Name}' AND Password = '${Password}'`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log(err);
         res.error(null, err);
      }
      else {
         res.send(response);
         console.log(response);
      }
   });
}

const newVolunteer = async function (req, res, next) {
   var query = ` SELECT * FROM users WHERE Type='Volunteer' AND Approved_status = 0`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log(err);
         res.error(null, err);
      }
      else {
         res.send(response);
         console.log("send new volunteer")
      }
   }
   );
}

const approvedVolunter = async function (req, res, next) {
   const { user_id } = req.params;
   var query = `UPDATE users SET Approved_status = 1 WHERE user_id= ${user_id}`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log(err);
         res.error(null, err);
      }
      else {
         res.send({ insertId: response.insertId });
         console.log("volunteer approved!");
      }
   })
}

const UsersController = { getAllUsers,getPassengersDetailsForNextSchedule,getVolunteersDetailsForNextSchedule,getActiveVolunteersByDate, addUser, updateUser, signIn, newVolunteer, approvedVolunter }
module.exports =  UsersController ;