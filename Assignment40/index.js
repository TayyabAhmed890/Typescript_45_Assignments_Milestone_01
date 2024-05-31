// // Task 40
// Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var value = make_album("Atif Aslam", "Tajdaar-e-Haram");
var value1 = make_album("Bilal Saeed", "12 saal");
var value2 = make_album("Akira", "Happy Nation");
console.log(value);
console.log(value1);
console.log(value2);
