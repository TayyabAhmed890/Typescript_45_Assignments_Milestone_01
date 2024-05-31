let current_users:string[] = ["Tayyab","Khan","Ahil","tazeem","anwar"]
let new_users:string[] = ["Zahid","younus","Munna","Ahmed","anwar"]

let current_user_lower :string[] = current_users.map(users => users.toLowerCase())

for(let new_user of new_users){
    if(current_user_lower.includes(new_user.toLowerCase())){
        console.log(`sorry ${new_user}, that name is taken`);
        
    }else{
        console.log(`yes ${new_user}, is still in avaliable list`);
        
    }
}
