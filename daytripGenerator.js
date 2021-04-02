"use strict"

let userName = prompt("Hello! Welcome to the Daytrip Generator. Give me you name and I'll plan you a day!");
let destinationArray = ["East Village", "Benson", "Old Market", "Aksarben", "Valley Junction", "Jordan Creek"];
let restaurantArray = ["Zombie Burger", "Ika", "Golden Bowl", "iPho#1","Sinful Burger", "Tasty Tacos", "Cactus Bobs"];
let transportationArray = ["car", "bus", "bike", "taxi", "giraffe"];
let entertainmentArray = ["see a concert", "play Frisbee", "fly a kite", "play yard games", "be the only person in attendance for a bad mime's first performance"];

//Have to instantiate them first in order for ensureNewResult function to work
let destination;
let restaurant;
let transportation;
let entertainment;

destination = selectRandom(destinationArray);
restaurant = selectRandom(restaurantArray);
transportation = selectRandom(transportationArray);
entertainment = selectRandom(entertainmentArray);

let optionString = "Does this sound like a good plan?\nTo change the destination enter '1'.\nTo change the restaurant enter '2'.\n" +
"To change the mode of transportation enter '3'.\nTo change the entertainment enter '4'.\nIf you'd like to get a whole new day enter '5'.\n" +
"If you are happy with this plan enter '6'";

function resultString(transportation, destination, restaurant, entertainment){
    return "Your totally random day will be taking a " + transportation + " to the " + destination 
    + " area. While there eat at " + restaurant + ", and for entertainment you can " + entertainment + "!";
}

function ensureNewResult(int, length){
    if(destinationArray[int] == destination || restaurantArray[int] == restaurant || transportationArray[int] == transportation || entertainmentArray[int] == entertainment){
        int = getRandomInt(length);
    }
    return int;
}
//random number generator
function getRandomInt(length){
    let int = Math.floor(Math.random() * length);
    int = ensureNewResult(int, length);
    return int;
}

function selectRandom(array){
    let result = array[getRandomInt(array.length)];
    return result;
}

console.log("Thanks " + userName + "! " + resultString(transportation, destination, restaurant, entertainment));

let result = prompt(optionString);
// Menu
while(result != 6){
    switch(result){
        case "1":
            destination = selectRandom(destinationArray);
            break;
        case "2":
            restaurant = selectRandom(restaurantArray);
            break;
        case "3":
            transportation = selectRandom(transportationArray);
            break;
        case "4":
            entertainment = selectRandom(entertainmentArray);
            break;
        case "5":
            destination = selectRandom(destinationArray);
            restaurant = selectRandom(restaurantArray);
            transportation = selectRandom(transportationArray);
            entertainment = selectRandom(entertainmentArray);
            break;
        default:
            result = alert("We need a number 1-6");
            break;
    }
    console.log(resultString(transportation, destination, restaurant, entertainment));
    result = prompt(optionString);
}

console.log("Have a great time!");