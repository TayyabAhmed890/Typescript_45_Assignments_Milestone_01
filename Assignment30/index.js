var Users = ["Ali", "Hammad", "Shahzad", "Zain", "Haris", "admin"];
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var user = Users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", Thank you for Loging in again"));
    }
}
