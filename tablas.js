const prompt = require ("prompt-sync")({sigint: true})



console.log('¡TABLAS DE MULTIPLICAR!')
let numero = prompt('Ingrese Numero: ')

for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;

    console.log(`${i} * ${numero} = ${multiplicacion}`);
}