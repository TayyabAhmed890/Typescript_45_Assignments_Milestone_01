var guestList = ["Ahmed", "Khan", "Ali", "Laraib", "Hammad"];
var remove = "Ahmed";
console.log(remove + " Cannot Attend the Dinner");
var add = "Haris";
guestList[guestList.indexOf(remove)] = add;
console.log(guestList);
guestList.map(function (item) { return console.log("Dear, ".concat(item, " You are Invited to Dinner!")); });
