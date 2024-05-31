var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var PlaceVisit = ["Tokyo", "Iran", "Oman", "Dubai", "Canada", "America"];
// Part 1 
console.log("Original Order:", PlaceVisit);
// Part 2
console.log("Alphabetical Order:", __spreadArray([], PlaceVisit, true).sort());
// Part 3
console.log("Original Order After Sorting:", PlaceVisit);
// Part 4
console.log("Reverse Alphabetical Order:", __spreadArray([], PlaceVisit, true).sort().reverse());
// Part 5
console.log("Original Order After reverse Sorting:", PlaceVisit);
// Part 6
PlaceVisit.reverse();
console.log("Reverse Order:", PlaceVisit);
// Part 7
PlaceVisit.reverse();
console.log("Back to Original Order:", PlaceVisit);
// Part 8
PlaceVisit.sort();
console.log("Sorted in Alphabetical Order:", PlaceVisit);
// Part 9
PlaceVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", PlaceVisit);
