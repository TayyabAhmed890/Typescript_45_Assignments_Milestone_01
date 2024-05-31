let guestList = ["Ahmed","Khan","Ali","Laraib","Hammad"];

// part 1

while(guestList.length>2){
    const remove = guestList.pop();
    console.log(`Sorry, ${remove} you are no Longer Invited to Dinner`);
    
}

// part 2

let guestListf = ["Ahmed","Khan"];

guestList.forEach((guestListf)=>console.log(`Dear ${guestListf} you are still invited`)
)

// part 3

let guestListo = ["Ahmed","Khan","Ali","Laraib","Hammad"];

guestListo.pop()
guestListo.pop()
guestListo.pop()

console.log("Final Guest List",guestListo);

