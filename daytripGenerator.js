"use strict"

let userName = prompt("Hello! Welcome to the Daytrip Generator. Give me you name and I'll plan you a day!");
let destinationArray = ["East Village", "Benson", "Old Market", "Aksarben", "Valley Junction", "Jordan Creek"];
let restaurantArray = ["Zombie Burger", "Ika", "Golden Bowl", "iPho#1","Sinful Burger", "Tasty Tacos", "Cactus Bobs"];
let transportationArray = ["car", "bus", "bike", "taxi", "giraffe"];
let entertainmentArray = ["see a concert", "play Frisbee", "fly a kite", "play yard games", "be the only person in attendance for a bad mime's first performance"];

//random number generator
function getRandomInt(length){
    return Math.floor(Math.random() * length);
}

function selectRandom(array){
    let result = array[getRandomInt(array.length)];
    return result;
}

let destination = selectRandom(destinationArray);
let restaurant = selectRandom(restaurantArray);
let transportation = selectRandom(transportationArray);
let entertainment = selectRandom(entertainmentArray);


console.log("Thanks " + userName + "! Your totally random day will be taking a " + transportation + " to the " + destination 
+ " area. While there eat at " + restaurant + ", and for entertainment you can " + entertainment + "!");

