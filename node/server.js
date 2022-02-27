 //מודולים מערכת
 const cors = require('cors');
 const express= require('express');
 const morgan = require('morgan');
 const bodyparser = require('body-parser');
 const router = require("./router/router");
// // מודולים שלי
// const {mysqlConnection} = require("./mySql/mysql");
// const userRouter = require('./routers/userRouter');
// const ordersRouter = require('./routers/ordersRouter');
// const managerRouter = require('./routers/managerRouter');

const port = process.env.PORT || 3001;

var app=express();
app.use(cors());
app.use(bodyparser.json());
app.use("/",router);
// app.use("/orders",ordersRouter);
// app.use("/manager",managerRouter);

  app.listen(port , ()=>console.log(`Listening on port ${port}...`));

