// // Task 39

// City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_country(city:string,country:string):string {
    return `${city},${country}`

};

let f1 = city_country("Tokyo","Japan")
let f2 = city_country("Dhaka","Bangladesh")
let f3 = city_country("Islamabad","Pakistan")

console.log(f1);
console.log(f2);
console.log(f3);
