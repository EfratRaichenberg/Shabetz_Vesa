//מודולים מערכת
const cors = require('cors');
const express= require('express');
const bodyparser = require('body-parser');
// מודולים שלי
const {mysqlConnection} = require("./mySql/mysql");
const volunteerRouter = require('./routers/volunteerRouter');
const passengerRouter = require('./routers/passengerRouter');

const port = process.env.PORT || 3001;

var app=express();
app.use(cors());
app.use(bodyparser.json());
app.use("/volunteer",volunteerRouter);
app.use("/passenger" ,passengerRouter);
mysqlConnection.connect(function(err) {
    if (err) {
       console.error('Connection Failed! '+JSON.stringify(err , undefined , 2));
    }
    else
       console.log('Connection Established Successfuly.');    
  });

  app.listen(port , ()=>console.log(`Listening on port ${port}...`));
