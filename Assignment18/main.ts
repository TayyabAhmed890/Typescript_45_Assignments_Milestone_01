var PlaceVisit:string[] = ["Tokyo","Iran","Oman","Dubai","Canada","America"]

// Part 1 

console.log("Original Order:",PlaceVisit);

// Part 2

console.log("Alphabetical Order:",[...PlaceVisit].sort());

// Part 3

console.log("Original Order After Sorting:",PlaceVisit);

// Part 4

console.log("Reverse Alphabetical Order:",[...PlaceVisit].sort().reverse());

// Part 5

console.log("Original Order After reverse Sorting:",PlaceVisit);

// Part 6

PlaceVisit.reverse()
console.log("Reverse Order:",PlaceVisit);

// Part 7

PlaceVisit.reverse()
console.log("Back to Original Order:",PlaceVisit);

// Part 8

PlaceVisit.sort()
console.log("Sorted in Alphabetical Order:",PlaceVisit);

// Part 9

PlaceVisit.sort((a, b)=>b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:",PlaceVisit);

