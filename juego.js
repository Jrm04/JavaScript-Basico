const piedra = 1;
const papel = 2;
const tijeras = 3;

/* const User = parseInt(
    prompt("Escoje un valor const piedra = 1 papel = 2 tijeras = 3")
);
 */
const machine = Math.floor(Math.random() * (4 - 1)) + 1;

const play = (user, machine) =>{
    if ((user === 1 && machine === 3) || (user === 2 && machine === 1) || (user === 3 && machine === 2)){
        console.log('user won');
    } else if (user === machine) {
        console.log('Draws')
    }else{
        console.log('Machine Won')
    }
};

play(1, 3);