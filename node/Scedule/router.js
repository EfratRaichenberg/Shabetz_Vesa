C:\Users\1\Shabetz_Vesa\node\router\router.js


const app = require("express");
const router = app.Router();


const {calcSchedule} = require("../controllers/schedule.controller")

const { getAllUsers, getPassengersDetailsForNextSchedule, getVolunteersDetailsForNextSchedule, getActiveVolunteersByDate, addUser, updateUser , signIn , newVolunteer,approvedVolunter}  =require("../controllers/users.controller");
const { addOrder ,AllOrders }= require("../controllers/orders.controller");



router.post('/addUser', addUser);
router.post('/addOrder',addOrder);

router.get('/signIn/:Name/:Password', signIn);
router.get('/getAllUsers', getAllUsers);
router.get('/newVolunteer',newVolunteer);
router.get('/AllOrders',AllOrders);

router.put('/updateUser', updateUser);
router.put('/approvedVolunter/:user_id',approvedVolunter);

router.get('/scheduling',calcSchedule);

module.exports =router ;