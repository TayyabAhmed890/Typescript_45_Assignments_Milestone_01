// Task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var car1 = "Rolls Royce";
var car2 = "BMW";
var car3 = "Mercedes";
var car4 = "Audi";
var car5 = "Ford";
if (car1 == car4) {
    console.log("Car names are equal");
}
else {
    console.log("Car name are not equal");
}
if (car4.length == car5.length) {
    console.log("Car Length is Equal");
}
else {
    console.log("Car Length is not Equal");
}
if (car1 != car3) {
    console.log("Cars are not equal");
}
var eligiable = 18;
var eligiable1 = 19;
if (eligiable >= 18) {
    console.log("Welcome to our Enterprises!");
}
else {
    console.log("Sorry you are not eligiable");
}
if (eligiable1 < 18) {
    console.log("Welcome to our Kids Funland!");
}
else {
    console.log("Sorry you are not eligiable");
}
var age1 = 11;
var age2 = 22;
if (age1 > age2) {
    console.log("Teenager");
}
else {
    console.log("Younger");
}
if (age1 == 19 && age2 == 22) {
    console.log("Accepted");
}
else {
    console.log("Rejected");
}
if (age1 == 11 || age2 == 22) {
    console.log("Good");
}
else {
    console.log("Bad");
}
var city = ["Karachi", "Lahore", "Islamabad", "Rawalpindi"];
if (city.includes("Karachi")) {
    console.log("Karachi is Loacated in Sindh");
}
// if(!city.includes("America")){
//     console.log("America is not Include in Array");
// }
