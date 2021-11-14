const {Router} = require("express");

const {mysqlConnection}=require("../mySql/mysql");

const volunteerRouter = Router();

//הצגת כל המתנדבים
volunteerRouter.get('/getVolunteerList' , (req,res)=> {
  mysqlConnection.query('SELECT * FROM volunteer' , (err , rows , fields)=> {
      if(!err)
         res.send(rows);
      else
         console.log(err);
  })
});

//הוספת מתנדב חדש
volunteerRouter.post('/addNewVolunteer' , (req,res)=> {
    const {Volunteer_id,Password,Name,City,Street,Phone_number,Mail,Num_places,Car_leaflet,Casual_status,Approved_status} =req.body;
    mysqlConnection.query('INSERT INTO volunteer(Volunteer_id,Password,Name,City,Street,Phone_number,Mail,Num_places,Car_leaflet,Casual_status,Approved_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [Volunteer_id,Password,Name,City,Street,Phone_number,Mail,Num_places,Car_leaflet,Casual_status,Approved_status],
    (err,result,feilds)=>{
       if(!err)
          res.send(result);
       else
          console.log(err);
    })
});

//עדכון נתוני מתנדב
volunteerRouter.put('/updateVolunteer' , (req,res) => {
    const {Volunteer_id} = req.body;
    const {City,Street} = req.body;
    mysqlConnection.query(`UPDATE volunteer SET City='${City}',Street='${Street}' WHERE Volunteer_id=${Volunteer_id}`,
    (err , result , fields) => {
        if(!err)
          res.send(result);
        else
          console.log(err); 
    })
});

//מחיקת מתנדב
volunteerRouter.delete('/deleteVolunteer' , (req,res) =>{
   const {Volunteer_id} = req.body;
   mysqlConnection.query(`DELETE FROM volunteer WHERE Volunteer_id=${Volunteer_id}` ,(err , result , fields)=>{
    if(!err)
      res.send(result);
    else
      console.log(err);
   } )
});


module.exports = volunteerRouter;