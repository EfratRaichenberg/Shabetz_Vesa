C:\Users\1\Shabetz_Vesa\node\scheduling\scheduling.js

const { orderedDrivesDetails } = require("./SchedulingGetData");

//convert preferences and rank of volunteers to matrix for using munkres purpose
function dataToProfitMatrix(passengersAndVolunteers, passengersDetails, volunteersDetails) {
    var matrix = [];
    passengersAndVolunteers.map(passenger => {
        passenger.volunteers.map((volunteer, i) => {
            matrix[i] = [];
            for (let j = 0, pref; j < 4; j++) {
                switch (j) {
                    case 0:
                        pref = 'leaflet';
                        break;
                    case 1:
                        pref = 'space';
                        break;
                    case 2:
                        pref = 'familiar';
                        break;
                    case 3:
                        pref = 'distance';
                        break;
                }
                matrix[i][j] = getaRankByPreference(pref, passenger[pref], volunteer[pref]);
            }

        })
        let munkresResult=useMunkres(matrix);
        passenger.volunteers=munkresResultToIds(munkresResult,passenger.Volunteers);
    })
    return passengersAndVolunteers;
}

//get the right rank of each preference
function getaRankByPreference(preference, passRank, volRank) {
    var rank;
    switch (preference) {
        case leaflet:
            if (volRank === 0)
                rank = 0;
            else {
                rank = passRank * 10;
            }
            break;
        case space:
            switch (volRank) {
                case 2:
                    rank = passRank * 5;
                    break;
                case 5:
                    rank = passRank * 5 + 1;
                    break;
                case 7:
                    rank = passRank * 5 + 2;
                    break;
                case 9:
                    rank = passRank * 5 + 3;
                    break;
                case volRank > 9:
                    rank = passRank * 5 + 4;
                    break;
            }
            break;
        case familiar:
            if (volRank === 0)
                rank = 0;
            else {
                rank = passRank * 3;
            }
            break;
        case distance:
            if (volRank === 0)
                rank = 2;
            else {
                rank = 0;
            }
            break;
    }
    return rank;
}

function munkresResultToIds(munkresResult,volunteers)
{
    let volunteersRanked=[];
    munkresResult.map(munk=>{
        munk.map(res=>{
            volunteersRanked.push(volunteers[res[0]].user_id);
        })
    })
    return volunteersRanked;
}

// class Passenger {
//     id;
//     volunteers;
//     prefRank;
//     numOfOpVolunteers;
//     constructor(id, volunteerList, prefRank) {
//         this.id = id;
//         this.volunteers = volunteerList;
//         this.prefRank = prefRank;
//         this.numOfOpVolunteers = volunteerList.length;
//     }
//     get id() {
//         return this.id;
//     }
//     get volunteers() {
//         return this.volunteers;
//     }
//     get prefRank() {
//         return this.prefRank;
//     }
//     get numOfOpVolunteers() {
//         return this.numOfOpVolunteers;
//     }
// }

// class Volunteer {
//     amountOfSeats;
//     amountOfAvailableSeats;
//     constructor(amountOfSeats) {
//         this.amountOfSeats = amountOfSeats;
//         this.amountOfAvailableSeats = amountOfSeats;
//     }
//     get amountOfSeats() {
//         return this.amountOfSeats;
//     }
//     get amountOfAvailableSeats() {
//         return this.amountOfAvailableSeats;
//     }
// }


// //==============================================================================================
// //for meantime untill get volunteers from db
// var vol1 = new Volunteer(5);
// var vol2 = new Volunteer(5);
// var vol3 = new Volunteer(7);
// var vol4 = new Volunteer(5);
// var vol5 = new Volunteer(7);
// var vol6 = new Volunteer(7);
// var vol7 = new Volunteer(2);
// var vol8 = new Volunteer(5);
// var vol9 = new Volunteer(5);
// var volunteerList1 = [vol1, vol2, vol3, vol4, vol5, vol6, vol7];
// var volunteerList2 = [vol1, vol8, vol9];
// var passenger1 = new Passenger(1234, volunteerList1, { leaftLet: 3, familiar: 2, space: 1 });
// var passenger2 = new Passenger(1111, volunteerList2, { leaftLet: 2, familiar: 2, space: 3 });
// var volunteersForPassengersList = [passenger1, passenger2];



//using munkres t0 get the list of optimal assignment cells in matrix
function useMunkres(matrix) {
    const munkres = require('munkres-js');

    var maximum = 40;
    var costMat = munkres.make_cost_matrix(matrix, function (x) { return maximum - x; });
    var munkresResult=[];
    while (costMat.length >= 4) {
        munkresResult.push(munkres(costMat));
        munkresResult.forEach(munk=>{munk.map(inRes=>{costMat.splice(inRes[0], inRes[0] + 1);})})    
      }
      console.log(munkresResult);
    return munkresResult;
}



var statusOFMoreThenOneInCar = false;
var nonScheduledOnes = [];

function FixDuplicateOptimalVolunteer(volunteersForPassengersList) {
    var str = JSON.stringify(volunteersForPassengersList);
    console.log("enter FixDuplicateOptimalVolunteer function with passengers: " + str);
    var problamaticPassengers = [];
    var indexProblamaticPassengers = [];
    var firstVolunteers = [];
    var indexOfTwoInCar = [];
    //get passengers first volunteers
    volunteersForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
    console.log(JSON.stringify(firstVolunteers));

    //return true if there are duplicates and false if not.
    var isThereDuplicate = firstVolunteers.some((val, i) => firstVolunteers.indexOf(val) !== i);
    if (!isThereDuplicate)
        console.log("no duplicates");
    else {
        while (isThereDuplicate) {
            problamaticPassengers = getAllDuplicatesVolunteers(firstVolunteers);
            console.log("problamaticPassengers: " + JSON.stringify(problamaticPassengers));
            for (let i = 0; i < problamaticPassengers.length; i++) {
                console.log("enter the for loopppp :)");
                indexProblamaticPassengers = getTheIndexesOfDuplicateVolunteer(problamaticPassengers[i], firstVolunteers);
                console.log("indexProblamaticPassengers: " + JSON.stringify(indexProblamaticPassengers));
                checkHigherRankAndSwap(volunteersForPassengersList, indexProblamaticPassengers);
                volunteersForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
                if (statusOFMoreThenOneInCar) {
                    while (indexOfTwoInCar !== null) {
                        firstVolunteers.splice(indexOfTwoInCar, indexOfTwoInCar + 2);
                        indexOfTwoInCar.pop();
                    }
                }
                isThereDuplicate = firstVolunteers.some((val, i) => firstVolunteers.indexOf(val) !== i);
            }
        }
    }
    console.log("schedule finished!");
}



//-----------------------------------------------------------------------------------the line that holds the schedule
volunteersForPassengersList.map((o, i) => { firstVolunteers.push(o.volunteers[0]) });
//-------------------------------------------------------------------------------------need to add the option to return the original volunteers lisr for each passenger
// need to add the non scheduled ones if exist

function checkHigherRankAndSwap(volunteersForPassengersList, indexProblamaticPassengers) {
    var lowestRankIndex = [];
    let indexOfTwoInCar = -1;
    var j = -1;
    while (indexProblamaticPassengers.length > 1) {
        let i = indexProblamaticPassengers.length - 1;
        if (volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"] < volunteersForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["leaftLet"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            j = indexProblamaticPassengers[i - 1];
            console.log("check ranks: " + JSON.stringify(volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"]));
        }
        else if (volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["leaftLet"] > volunteersForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["leaftLet"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
            j = indexProblamaticPassengers[i];
        }
        else if (volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["space"] < volunteersForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["space"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            j = indexProblamaticPassengers[i - 1];
            console.log("check ranks: " + JSON.stringify(volunteersForPassengersList[indexProblamaticPassengers[1]].prefRank["space"]));
        }
        else if (volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["space"] > volunteersForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["space"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
            j = indexProblamaticPassengers[i];
        }
        else if (volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["familiar"] < volunteersForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["familiar"]) {
            lowestRankIndex = indexProblamaticPassengers[i];
            j = indexProblamaticPassengers[i - 1];
            console.log("check ranks: " + JSON.stringify(volunteersForPassengersList[indexProblamaticPassengers[1]].prefRank["familiar"]));
        }
        else if (volunteersForPassengersList[indexProblamaticPassengers[i]].prefRank["familiar"] > volunteersForPassengersList[indexProblamaticPassengers[i - 1]].prefRank["familiar"]) {
            lowestRankIndex = indexProblamaticPassengers[i - 1];
            j = indexProblamaticPassengers[i];
        }

        //if they have same preferences pop the first one- no matter who.
        if (lowestRankIndex === -1) {
            //if he only has one volunteer left
            if (volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers.length === 1) {
                indexOfTwoInCar.push(onlyOneVolunteerSituation(volunteersForPassengersList, indexProblamaticPassengers, i, i - 1));
            }
            else
                volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers.shift();
        }
        if (volunteersForPassengersList[lowestRankIndex].volunteers.length === 1) {
            indexOfTwoInCar.push(onlyOneVolunteerSituation(volunteersForPassengersList, indexProblamaticPassengers, lowestRankIndex));
        }
        volunteersForPassengersList[lowestRankIndex].volunteers.shift();
        console.log("new volunteer list: " + JSON.stringify(volunteersForPassengersList[lowestRankIndex].volunteers));

        indexProblamaticPassengers.splice(lowestRankIndex, lowestRankIndex + 1);
    }
    return indexOfTwoInCar;
}


function onlyOneVolunteerSituation(volunteersForPassengersList, indexProblamaticPassengers, i, j) {
    let indexOTwoInCar = -1;
    //if the more prefered one has more then 1 optional volunteer
    if (volunteersForPassengersList[indexProblamaticPassengers[j]] > 1) {
        //if they don't mind be on the same drive and the diver has place
        if (volunteersForPassengersList[indexProblamaticPassengers[j]].space === 0
            && volunteersForPassengersList[indexProblamaticPassengers[i]].space === 0
            && volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats > 0) {
            indexProblamaticPassengers.splice(j, i);
            statusOFMoreThenOneInCar = true;
            indexOTwoInCar = volunteersForPassengersList[indexProblamaticPassengers[j]];
            volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats--;
        }
        //prefer the one with 1 volunteer to have at least a drive
        else {
            volunteersForPassengersList[indexProblamaticPassengers[j]].volunteers.shift();
            nonScheduledOnes.push(volunteersForPassengersList[indexProblamaticPassengers[j]]);
        }
    }
    else {
        if (volunteersForPassengersList[indexProblamaticPassengers[j]].space < 3
            && volunteersForPassengersList[indexProblamaticPassengers[i]].space < 3
            && volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats > 0) {
            indexProblamaticPassengers.splice(j, i);
            statusOFMoreThenOneInCar = true;
            indexOTwoInCar = volunteersForPassengersList[indexProblamaticPassengers[j]];
            volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers[0].amountOfAvailableSeats--;
        }
        else {
            volunteersForPassengersList[indexProblamaticPassengers[i]].volunteers.shift();
            nonScheduledOnes.push(volunteersForPassengersList[indexProblamaticPassengers[i]]);
        }
    }
    return indexOTwoInCar;
}



function getAllDuplicatesVolunteers(firstVolunteers) {
    console.log("enter getAllDuplicatesVolunteers function with firstVolunteers: " + JSON.stringify(firstVolunteers));
    const toFindDuplicates = firstVolunteers =>
        firstVolunteers.filter((item, index) => firstVolunteers.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(firstVolunteers);
    return duplicateElements;
}

function getTheIndexesOfDuplicateVolunteer(probVolunteer, firstVolunteers) {
    var str1 = JSON.stringify(probVolunteer);
    var str2 = JSON.stringify(firstVolunteers);
    console.log("enter getTheIndexesOfDuplicateVolunteer function with probVolunteer: " + str1 + " and firstVolunteers: " + str2);
    var haystack = firstVolunteers;
    var needle = probVolunteer;

    var results = [];
    var idx = haystack.indexOf(needle);
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
}

function returnSchedulingResult(volunteersForPassengersList) {
    volunteersForPassengersList.map((obj, i) => { firstVolunteers.push(obj.volunteers[0]) });
    return firstVolunteers;
}

function invokeSchedulingAlgorithm(matrixForPassenger, optionalVolunteersList) {
    getVolunteerByMunkres(matrixForPassenger, optionalVolunteersList);
    FixDuplicateOptimalVolunteer(volunteersForPassengersList);
    returnSchedulingResult();
}

module.exports = { dataToProfitMatrix, FixDuplicateOptimalVolunteer };
