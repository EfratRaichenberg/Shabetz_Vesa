const { response } = require("express");
const dbConnection = require("../mySql/mysql");


const addPreference = async function (req, res, next) {
   const { userId, leaflet, familiar, space } = req.body;
   var query = `INSERT INTO preferences ( userId, leaflet, familiar, space) VALUES (${userId}, ${leaflet}, ${familiar}, ${space}) `;
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



const preferenceController = { addPreference }
module.exports =  preferenceController ;