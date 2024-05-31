var myUsers = ["Tayyab", "Wasey", "Bilal", "Hassan"];
if (myUsers.length === 0) {
    console.log("we need to find some users!");
}
for (var _i = 0, myUsers_1 = myUsers; _i < myUsers_1.length; _i++) {
    var user = myUsers_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for loging in again"));
    }
}
myUsers = [];
if (myUsers.length === 0) {
    console.log("we need to find some users!");
}
