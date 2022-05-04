const { response } = require("express");
const dbConnection = require("../mySql/mysql");


const passengerHistoryDrives = async function (req, res, next) {
   const { passenger_Id } = req.params;
   let query = `SELECT Day , Hour , Hospital , Name ,Date
                FROM historydrives JOIN users on historydrives.volunteer_id = users.user_id
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

const volunteerHistoryDrives = async function (req, res, next) {
   const { volunteer_Id } = req.params;
   let query = `SELECT Day , Hour , Hospital , Name ,Date
                FROM historydrives JOIN users on historydrives.Passenger_id = users.user_id
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
const HistoryDrivesController = { passengerHistoryDrives, volunteerHistoryDrives };
module.exports =  HistoryDrivesController ;