var myVehicle = ["Car", "Bus", "Bike", "Rickshaw"];
function statement(myVehicle) {
    myVehicle.forEach(function (item) {
        console.log("I would like to own a ".concat(item, "."));
    });
}
statement(myVehicle);
//Method 2
var myVehicle2 = ["Car", "Bus", "Bike", "Rickshaw"];
myVehicle2.map(function (item) {
    return console.log("I would like to own a ".concat(item, "."));
});
