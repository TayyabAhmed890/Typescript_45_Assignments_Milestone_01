let guestList = ["Ahmed","Khan","Ali","Laraib","Hammad"];

let cantattend = "Khan"

let newguest = "Shahzad"

guestList[guestList.indexOf(cantattend)]=newguest;

console.log(guestList);

// Part 1

guestList.map((items)=>console.log(`Dear, ${items} I Found a Bigger Dinner Table so Iam Invited More People`)
)

// Part 2

let insertguest = "Tayyab Ahmed"
guestList.unshift(insertguest);
console.log(guestList);

// Part 3

let insertguest2 = "Hassan"
let middleindex = guestList.length/2

guestList.splice(middleindex,0,insertguest2)
console.log(guestList);

// Part 4 

guestList.push("Hamza")
console.log(guestList);

// Part 5

guestList.map((items)=>console.log(`Welcome, ${items} on Dinner`)
)


