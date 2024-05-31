//1st Method..!

let myFriends:string[] = ["Ghani","Ahmed","Shahzaib"];
let msg = "Have a Good Day"


console.log("Greetings:",myFriends,msg);

console.log("Greetings:",myFriends[0],msg);
console.log("Greetings:",myFriends[1],msg);
console.log("Greetings:",myFriends[2],msg);

//2nd Method..!

let myFriends1:string[] = ["Ghani","Ahmed","Shahzaib"];

function value(myFriends1:string[]): void {
    myFriends1.forEach(item => {
        console.log(`Greetings: ${item} Welcome to Our Store`);
        
    });
    
}

value(myFriends1);


