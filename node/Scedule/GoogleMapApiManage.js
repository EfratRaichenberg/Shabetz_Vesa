C:\Users\1\Shabetz_Vesa\node\scheduling\GoogleMapApiManage.js


const axios = require('axios');

const apiKeyForPlaceId = "AIzaSyC2RaV5EHOB1o0Hra4n1FRzkJAGG-kC7gI";
const apiKeyForDictanceMat = "AIzaSyBB54WpGhCDKwOk9yDBa3LJZGuiENlY0fI";


var originPointText;
//find place api config
var configPlaceId = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + originPointText + '&inputtype=textquery&key=' + apiKeyForPlaceId,
  headers: {}
};

var arrivalTime;
var volPlaceId, passPlaceId, DestPlaceId;
var disMatResponse;
//ditance matrix api config
var configDistanceMat = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:' + volPlaceId + '&destinations=' + 'place_id:' + passPlaceId + '|place_id:' + DestPlaceId + '&arrival_time=' + arrivalTime + '&key=' + apiKeyForDictanceMat,
  headers: {}
};



const getOptionalVolunteersForPassengerByTimeAndDistance = (passengers, volunteers, ordersToSchedule, tomorrowString) => {
  var optionalVolunteersForPassenger=[];
  ordersToSchedule.map(order => {
    let passenger = passengers.filter(passenger => {
      return passenger.user_id === order.user_id
    })
    volunteers.map(volunteer => {
      originPointText = volunteer.Street + volunteer.City;
      //place id- get place id by string address
      axios(configPlaceId)
        .then(result => {
          volPlaceId = result.data.candidates[0].place_id;
          console.log('volPlaceId: ', volPlaceId);
        })
        .catch(function (error) {
          console.log(error);
        });

      originPointText = passenger.Street + passenger.City;

      axios(configPlaceId)
        .then(result => {
          passPlaceId = result.data.candidates[0].place_id;
          console.log('volPlaceId: ', passPlaceId);
        })
        .catch(function (error) {
          console.log(error);
        });

      originPointText = order.Hospital;

      axios(configPlaceId)
        .then(result => {
          DestPlaceId = result.data.candidates[0].place_id;
          console.log('volPlaceId: ', DestPlaceId);
        })
        .catch(function (error) {
          console.log(error);
        });

      arrivalTime = getArrivalTimeFormat(order.Hour, order.Date);

      //distance matrix-get distance and time travel between points
      axios(configDistanceMat)
        .then(function (response) {
          disMatResponse = response.data;
          console.log('volPlaceId: ', disMatResponse);
        })
        .catch(function (error) {
          console.log(error);
        });
      let totalDuration=disMatResponse.rows[0].elements[0].duration.text+' '+disMatResponse.rows[0].elements[1].duration.text;
      let departureTime=getVolunteerDepartureTime(totalDuration,order.Hour);
      if (volunteer[tomorrowString + 'Hour'] <= totalDuration)

      // i am hereeeeee-----------------------------
      {

      }
    })
  })
return optionalVolunteersForPassenger;
};

var arrivalTimeDate;

const getArrivalTimeFormat = (time, dateOfOrder) => {
  let timetoInt = time.split(':');
  let hour = parseInt(timetoInt[0]);
  let minute = parseInt(timetoInt[1]);
  let second = 0;
  let date = new Date(dateOfOrder);
  date.setDate(date.getDate() + 1);
  date.setHours(hour, minute, second);
  arrivalTimeDate=date;
  date.toUTCString();
  console.log('date: ', date);
  return date;
};

const getVolunteerDepartureTime = (duration, orderTime) => {
  let timetoInt = orderTime.split(':');
  let hour = parseInt(timetoInt[0]);
  let minute = parseInt(timetoInt[1]);
  let second = 0;
  let date = new Date(dateOfOrder);
  date.setDate(date.getDate() + 1);
  date.setHours(hour, minute, second);
  let arrivalTimeDate=date;

  let durationSplit = duration.split(' ');
  let durationInt=parseInt(durationSplit[1])+parseInt(durationSplit[3]);
  let departureTime=new Date;
  departureTime.setDate(arrivalTimeDate.getDate());
  if(durationSplit[1]==="min" || durationSplit[1]==="mins" && durationSplit[3]==="min" ||durationSplit[3]==="min3")
  {
    departureTime.setMinutes(arrivalTimeDate.getHours()-durationInt);
  }
  else if(durationSplit[1]==="hours" || durationSplit[1]==="hour" && durationSplit[3]==="hours" ||durationSplit[3]==="hour")
  {
    departureTime.setHours(arrivalTimeDate.getHours()-durationInt);
  }
  let departureDateParts=departureTime.split(' ');
  let departureTimeParts=departureDateParts[1].split(':');
  let departureInt;
  departureInt.push(departureTimeParts[0]=parseInt(departureTimeParts[0]));
  departureInt.push(departureTimeParts[1]=parseInt(departureTimeParts[1]));
  departureInt.push(departureTimeParts[2]=parseInt(departureTimeParts[2]));
  return departureInt;
};

module.exports = { getOptionalVolunteersForPassengerByTimeAndDistance };
