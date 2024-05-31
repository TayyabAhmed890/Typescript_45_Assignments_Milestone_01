// // Task 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function show_magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magicians = magician_1[_i];
        console.log(magicians.charAt(0).toUpperCase() + magicians.slice(1));
    }
}
function make_great2(magicians) {
    var getmagician = [];
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
    return getmagician;
}
;
var magician3 = ["Rafeel", "Robert", "Bruce"];
var Greatmagician2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(Greatmagician2);
