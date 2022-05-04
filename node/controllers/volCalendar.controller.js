const { response } = require("express");
const dbConnection = require("../mySql/mysql");


const addCalendar = async function (req, res, next) {
   const { volunteer_id,sunday,sundayHour,sundayEndHour,monday,mondayHour,mondayEndHour,tuesday,tuesdayHour,tuesdayEndHour,wednesday,wednesdayHour,wednesdayEndHour,thuersday,thuersdayHour,thuersdayEndHour,friday,fridayHour,fridayEndHour } = req.body;
   var query = `INSERT INTO volunteer_schedule (volunteer_id,sunday,sundayHour,sundayEndHour,monday,mondayHour,mondayEndHour,tuesday,tuesdayHour,tuesdayEndHour,wednesday,wednesdayHour,wednesdayEndHour,thuersday,thuersdayHour,thuersdayEndHour,friday,fridayHour,fridayEndHour) VALUES (${volunteer_id},${sunday},'${sundayHour}','${sundayEndHour}',${monday},'${mondayHour}','${mondayEndHour}',${tuesday},'${tuesdayHour}','${tuesdayEndHour}',${wednesday},'${wednesdayHour}','${wednesdayEndHour}',${thuersday},'${thuersdayHour}','${thuersdayEndHour}',${friday},'${fridayHour}','${fridayEndHour}')`;
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

const volCalendarController = { addCalendar };
module.exports =  volCalendarController ;