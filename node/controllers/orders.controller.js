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

const OrdersController = { addOrder };
module.exports =  OrdersController ;