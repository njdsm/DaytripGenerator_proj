"use strict"

let userName = prompt("Hello! Welcome to the Daytrip Generator. Give me you name and I'll plan you a day!");
let destination = ["East Village", "Benson", "Old Market", "Aksarben", "Valley Junction", "Jordan Creek"];
let restaurant = ["Zombie Burger", "Ika", "Golden Bowl", "iPho#1","Sinful Burger", "Tasty Tacos", "Cactus Bobs"];
let transportation = ["car", "bus", "bike", "taxi", "giraffe"];
let entertainment = ["see a concert", "play Frisbee", "fly a kite", "play yard games", "be the only person in attendance for a bad mime's first performance"];

console.log("Thanks " + userName + "! Your totally random day will be taking a " + transportation[0] + " to the " + destination[0] 
+ " area. While there eat at " + restaurant[0] + ", and for entertainment you can " + entertainment[0] + "!");

