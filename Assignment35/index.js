// // Task 35
// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
var animal = ["Panther", "Jaguar", "Tiger"];
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var animals = animal_1[_i];
    console.log(animals);
}
console.log("\n");
for (var _a = 0, animal_2 = animal; _a < animal_2.length; _a++) {
    var animals = animal_2[_a];
    console.log("A ".concat(animals, " is run Fast!"));
}
console.log("\nAll of These are Great! but i Love Jaguar");
