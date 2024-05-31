var guestList = ["Ahmed", "Khan", "Ali", "Laraib", "Hammad"];
// part 1
while (guestList.length > 2) {
    var remove = guestList.pop();
    console.log("Sorry, ".concat(remove, " you are no Longer Invited to Dinner"));
}
// part 2
var guestListf = ["Ahmed", "Khan"];
guestList.forEach(function (guestListf) { return console.log("Dear ".concat(guestListf, " you are still invited")); });
// part 3
var guestListo = ["Ahmed", "Khan", "Ali", "Laraib", "Hammad"];
guestListo.pop();
guestListo.pop();
guestListo.pop();
console.log("Final Guest List", guestListo);
