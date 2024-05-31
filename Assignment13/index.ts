let myVehicle:string[] = ["Car","Bus","Bike","Rickshaw"];

function statement(myVehicle:string[]): void {
    myVehicle.forEach(item => {
        console.log(`I would like to own a ${item}.`);
        
    }
);

}

statement(myVehicle);

//Method 2

let myVehicle2:string[] = ["Car","Bus","Bike","Rickshaw"];
myVehicle2.map((item) =>
    console.log(`I would like to own a ${item}.`)
)