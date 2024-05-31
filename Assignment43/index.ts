// // Task 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function show_magicians(magician:string[]):void{

    for (const magicians of magician){
        console.log(magicians.charAt(0).toUpperCase() + magicians.slice(1));
        
    }
}


function make_great2(magicians:string[]):string[] {
    const getmagician:string[] = [];
    for(let i = 0; i < magicians.length ; i++){
        magicians[i] = magicians[i] + " the Great"
    }
    return getmagician;

};

const magician3:string[] = ["Rafeel","Robert","Bruce"];
const Greatmagician2:string[] = make_great2(magician3)

show_magicians(magician3)
show_magicians(Greatmagician2)