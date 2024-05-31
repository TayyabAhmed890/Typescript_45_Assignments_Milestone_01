let myUsers:string[] = ["Tayyab","Wasey","Bilal","Hassan"];

if(myUsers.length === 0){
    console.log("we need to find some users!");
}
for(let user of myUsers){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?");
        
    }
    else{
        console.log(`Hello ${user}, thank you for loging in again`);
        
    }
}

myUsers = []
if(myUsers.length === 0){
    console.log("we need to find some users!");
    
}