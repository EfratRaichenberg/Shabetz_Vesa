const { response } = require("express");
const dbConnection = require("../mySql/mysql");


const addOrder = async function (req, res, next) {
   const { user_id , Hour, Adrress, Hospital,Date } = req.body;
   var query = `INSERT INTO order_drive (user_id ,Hour,Adrress,Hospital,Date) VALUES ( ${user_id} , '${Hour}', '${Adrress}', '${Hospital}','${Date}')`;
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

const AllOrders = async function (req, res, next) {
   let query = "select * from order_drive'";
   dbConnection.query(query, (err, response) => {
      if (err) {
         console.log("err: ", err);
         res.error(null, err);
         return;
      }
      console.log("Orders:", response);
      res.send(response);
   });
}
const OrdersController = { addOrder ,AllOrders };
module.exports =  OrdersController ;