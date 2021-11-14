const {Router} = require("express");

const {mysqlConnection}=require("../mySql/mysql");

const passengerRouter = Router();

//הצגת כל הנוסעים
passengerRouter.get('/getPassengerList' , (req,res)=> {
    mysqlConnection.query('SELECT * FROM passenger' , (err , rows , fields)=> {
        if(!err)
           res.send(rows);
        else
           console.log(err);
    })
  });

  //הוספת נוסע חדש
passengerRouter.post('/addNewPassenger' , (req,res)=> {
    const {passenger_id,Name,Phone_number,City,Neighborhood, Street,Hospital,Hour} =req.body;
    mysqlConnection.query('INSERT INTO passenger(passenger_id,Name,Phone_number,City,Neighborhood, Street,Hospital,Hour) VALUES (?,?,?,?,?,?,?,?)',
    [passenger_id,Name,Phone_number,City,Neighborhood, Street,Hospital,Hour],
    (err,result,feilds)=>{
       if(!err)
          res.send(result);
       else
          console.log(err);
    })
});

//עדכון נתוני נוסע
passengerRouter.put('/updatePassenger' , (req,res) => {
    const {passenger_id} = req.body;
    const {City,Street,Neighborhood} = req.body;
    mysqlConnection.query(`UPDATE passenger SET City='${City}',Street='${Street}' ,Neighborhood='${Neighborhood}' WHERE passenger_id=${passenger_id}`,
    (err , result , fields) => {
        if(!err)
          res.send(result);
        else
          console.log(err); 
    })
});

//מחיקת נוסע
passengerRouter.delete('/deletePassenger' , (req,res) =>{
    const {passenger_id} = req.body;
    mysqlConnection.query(`DELETE FROM passenger WHERE passenger_id=${passenger_id}` ,(err , result , fields)=>{
     if(!err)
       res.send(result);
     else
       console.log(err);
    } )
 });

  module.exports = passengerRouter;