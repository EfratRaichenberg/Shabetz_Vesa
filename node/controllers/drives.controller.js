const { response } = require("express");
const dbConnection = require("../mySql/mysql");


const passengerDrives = async function (req, res, next) {
   const { passenger_Id } = req.params;
   let query = `SELECT Day , Hour , Hospital , Name
                FROM drives JOIN users on drives.Volunteer_id = users.user_id
                where Passenger_id=${passenger_Id}`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log(response);
      res.send(response);
   });
}

const volunteerDrives = async function (req, res, next) {
   const { volunteer_Id } = req.params;
   let query = `SELECT Day , Hour , Hospital , Name ,Date , Street, City
                FROM drives JOIN users on drives.Passenger_id = users.user_id
                where volunteer_Id=${volunteer_Id}`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("Drives:", response);
      res.send(response);
   });
}

const calcSchedule = async function (req, res, next) {
   let query = `SELECT Name  , Day , Hour ,Adress, Hospital
                FROM sibootz JOIN users on sibootz.VolunteerID = users.user_id`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("Drives:", response);
      res.send(response);
   });
}

const Names = async function (req, res, next) {
   let query = `SELECT Name  
                FROM sibootz JOIN users on sibootz.PassengerID = users.user_id`;
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("Drives:", response);
      res.send(response);
   });
}
const DrivesController = { passengerDrives, volunteerDrives,calcSchedule ,Names};
module.exports =  DrivesController ;