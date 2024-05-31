// // Task 41

// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician:string[]):void{

    for (const magicians of magician){
        console.log(magicians.charAt(0).toUpperCase() + magicians.slice(1));
        
    }
}

const magician:string[] = ["David","Ralf","Clark"];
show_magicians(magician)