C:\Users\1\Shabetz_Vesa\node\controllers\orders.controller.js


const { response } = require("express");
const dbConnection = require("../mySql/mysql");

//הצגת כל הנוסעים

const addOrder = async function (req, res, next) {
   const { user_id , Hour, Adrress, Hospital } = req.body;
   var query = `INSERT INTO order_drive (user_id ,Hour,Adrress,Hospital) VALUES ( ${user_id} , '${Hour}', '${Adrress}', '${Hospital}')`;
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


//select all ordered drives for tomorrow
const AllOrders = async function (req, res, next) {
   let query = "select * from order_drive";
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         return;
      }
      console.log("Orders:", response);
      return response;
   });
}
const OrdersController = { addOrder ,AllOrders };
module.exports =  OrdersController ;
