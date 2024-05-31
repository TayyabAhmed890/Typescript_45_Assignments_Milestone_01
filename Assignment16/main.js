var guestList = ["Ahmed", "Khan", "Ali", "Laraib", "Hammad"];
var cantattend = "Khan";
var newguest = "Shahzad";
guestList[guestList.indexOf(cantattend)] = newguest;
console.log(guestList);
// Part 1
guestList.map(function (items) { return console.log("Dear, ".concat(items, " I Found a Bigger Dinner Table so Iam Invited More People")); });
// Part 2
var insertguest = "Tayyab Ahmed";
guestList.unshift(insertguest);
console.log(guestList);
// Part 3
var insertguest2 = "Hassan";
var middleindex = guestList.length / 2;
guestList.splice(middleindex, 0, insertguest2);
console.log(guestList);
// Part 4 
guestList.push("Hamza");
console.log(guestList);
// Part 5
guestList.map(function (items) { return console.log("Welcome, ".concat(items, " on Dinner")); });
