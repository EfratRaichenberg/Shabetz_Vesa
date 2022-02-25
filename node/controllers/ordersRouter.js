const {Router} = require("express");

const {mysqlConnection}=require("../mySql/mysql");

const ordersRouter = Router();

//הצגת כל הנסיעות
ordersRouter.get('/getOrdersList' , (req,res)=> {
  mysqlConnection.query('SELECT * FROM order_drive' , (err , rows , fields)=> {
      if(!err)
         res.send(rows);
      else
         console.log(err);
  })
});

//הוספת מתנדב חדש
ordersRouter.post('/addNewOrderDrive' , (req,res)=> {
    const {user_id,Hour ,Adrress  ,Hospital} =req.body;
    mysqlConnection.query('INSERT INTO order_drive(user_id,Hour ,Adrress  ,Hospital) VALUES (?,?,?,?)',
    [user_id,Hour ,Adrress  ,Hospital],
    (err,result,feilds)=>{
       if(!err)
          res.send(result);
       else
          console.log(err);
    })
});



module.exports = ordersRouter;