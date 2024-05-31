let guestList = ["Ahmed","Khan","Ali","Laraib","Hammad"];

let remove = "Ahmed"

console.log(remove + " Cannot Attend the Dinner");

let add = "Haris"

guestList[guestList.indexOf(remove)]=add;

console.log(guestList);

guestList.map((item)=>console.log(`Dear, ${item} You are Invited to Dinner!`)
)

