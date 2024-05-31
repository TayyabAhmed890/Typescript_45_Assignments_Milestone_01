//1st Method..!
var myFriends = ["Ghani", "Ahmed", "Shahzaib"];
var msg = "Have a Good Day";
console.log("Greetings:", myFriends, msg);
console.log("Greetings:", myFriends[0], msg);
console.log("Greetings:", myFriends[1], msg);
console.log("Greetings:", myFriends[2], msg);
//2nd Method..!
var myFriends1 = ["Ghani", "Ahmed", "Shahzaib"];
function value(myFriends1) {
    myFriends1.forEach(function (item) {
        console.log("Greetings: ".concat(item, " Welcome to Our Store"));
    });
}
value(myFriends1);
