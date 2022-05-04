C:\Users\1\Shabetz_Vesa\node\controllers\schedule.controller.js


const SchedulingGetData = require("../scheduling/SchedulingGetData");
const GoogleMapApiManage = require('../scheduling/GoogleMapApiManage');
const Scheduling = require('../scheduling/scheduling');

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrowString = getDayString(tomorrow.getDay());

const calcSchedule = (req, res) => {

    let ordersToSchedule = SchedulingGetData.orderedDrivesDetails();

    let orderingPassengersDetails = SchedulingGetData.getPassengersDetailsFromOrders(ordersToSchedule);

    let activeVolunteersDetails = SchedulingGetData.getNextScheduleActiveVolunteersdata(tomorrowString);

    let optionalVolunteersForPassenger = GoogleMapApiManage.getOptionalVolunteersForPassengerByTimeAndDistance(orderingPassengersDetails, activeVolunteersDetails, ordersToSchedule, tomorrowString);

    let passengersWithRankedVolunteers = Scheduling.dataToProfitMatrix(optionalVolunteersForPassenger, orderingPassengersDetails, activeVolunteersDetails);

    let schedulingResponse = Scheduling.FixDuplicateOptimalVolunteer(passengersWithRankedVolunteers);

    res.send(schedulingResponse);
}

function getDayString(day) {
    let dayNum = day;
    let dayOfWeek;
    switch (dayNum) {
        case 1:
            dayOfWeek = 'sunday';
            break;
        case 2:
            dayOfWeek = 'monday';
            break;
        case 3:
            dayOfWeek = 'tuesday';
            break;
        case 4:
            dayOfWeek = 'wednesday';
            break;
        case 5:
            dayOfWeek = 'thuersday';
            break;
        case 6:
            dayOfWeek = 'friday';
            break;
    }
    return dayOfWeek;
}

module.exports = {
    calcSchedule
}