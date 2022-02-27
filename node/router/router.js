const app = require("express");
const router = app.Router();

const { getAllUsers, addUser, updateUser , signIn , newVolunteer,approvedVolunter}  =require("../controllers/users.controller");
const { addOrder } = require("../controllers/orders.controller");



router.post('/addUser', addUser);
router.post('/addOrder',addOrder);

router.get('/signIn/:Name/:Password', signIn);
router.get('/getAllUsers', getAllUsers);
router.get('/newVolunteer',newVolunteer);


router.put('/updateUser', updateUser);
router.put('/approvedVolunter/:user_id',approvedVolunter);



module.exports =router ;