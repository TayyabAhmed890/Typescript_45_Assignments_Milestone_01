let Users:string[] = ["Ali","Hammad","Shahzad","Zain","Haris","admin"]

for(let user of Users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?");
        
    }else{
        console.log(`Hello ${user}, Thank you for Loging in again`);
        
    }
}