const { response } = require("express");
const dbConnection = require("../mySql/mysql");

const getAllVolunteers = async function (req, res, next) {
   let query = `select * from users where Type='Volunteer' and Approved_status = 1`;
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

const getAllPassengers = async function (req, res, next) {
   let query = "select * from users where Type='Passenger'";
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

const addUser = async function (req, res, next) {
   const { Name, Password, Type, Street, City, Neighborhood, Phone_number, Mail, Num_places, Car_leaflet, Casual_status, Approved_status } = req.body;
   var query = `INSERT INTO users (Name ,Password,Type,Phone_number,Mail,City,Neighborhood, Street,Num_places,Car_leaflet,Casual_status,Approved_status) VALUES ('${Name}', '${Password}', '${Type}', '${Phone_number}', '${Mail}', '${City}','${Neighborhood}', '${Street}', ${Num_places}, ${Car_leaflet}, ${Casual_status}, ${Approved_status}) `;
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
   const { userId, Name, Password,Type,Phone_number, Mail,City, Neighborhood, Street, Num_places, Car_leaflet, Casual_status, Approved_status } = req.body;
   var query = `UPDATE users SET Name = '${Name}', Password ='${Password}' ,Type='${Type}',Phone_number='${Phone_number}', Mail = '${Mail}', City='${City}',Neighborhood='${Neighborhood}', Street='${Street}',Num_places=${Num_places},Car_leaflet=${Car_leaflet},Casual_status=${Casual_status},Approved_status=${Approved_status} WHERE user_id = ${userId}`;
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

const approvedVolunteer = async function (req, res, next) {
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

const UsersController = { getAllPassengers,getAllVolunteers, addUser, updateUser, signIn, newVolunteer, approvedVolunteer }
module.exports =  UsersController ;