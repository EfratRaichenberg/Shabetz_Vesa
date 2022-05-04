const app = require("express");
const router = app.Router();

const { getAllVolunteers,getAllPassengers, addUser, updateUser , signIn , newVolunteer,approvedVolunteer}  =require("../controllers/users.controller");
const { addPreference } = require("../controllers/preference.controller");
const { addOrder,AllOrders } = require("../controllers/orders.controller");
const { addCalendar } = require("../controllers/volCalendar.controller");
const { passengerDrives, volunteerDrives }= require("../controllers/drives.controller");
const { passengerHistoryDrives, volunteerHistoryDrives }= require("../controllers/HistoryDrives.controller");

router.post('/addUser', addUser);
router.post('/addOrder',addOrder);
router.post('/addCalendar',addCalendar);
router.post('/addPreference', addPreference);

router.get('/signIn/:Name/:Password', signIn);
router.get('/getAllVolunteers', getAllVolunteers);
router.get('/getAllPassengers', getAllPassengers);
router.get('/newVolunteer',newVolunteer);
router.get('/AllOrders',AllOrders);
router.get('/passengerDrives/:passenger_Id',passengerDrives);
router.get('/volunteerDrives/:volunteer_Id',volunteerDrives);
router.get('/passengerHistoryDrives/:passenger_Id',passengerHistoryDrives);
router.get('/volunteerHistoryDrives/:volunteer_Id',volunteerHistoryDrives);


router.put('/updateUser', updateUser);
router.put('/approvedVolunteer/:user_id',approvedVolunteer);



module.exports =router ;