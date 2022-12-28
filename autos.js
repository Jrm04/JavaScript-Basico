const prompt = require ("prompt-sync")({sigint: true})
let autos = [];
let numeroRegistros = 0




function auto (marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

numeroRegistros = prompt('Cuantos Registros desea Realizar?: ')

for (i = 0; i < numeroRegistros; i++) {
    let marca = prompt(`Ingrese Marca ${i+1}: `)
    let modelo = prompt(`Ingrese Modelo ${i+1}: `)
    let año = prompt(`ingrese Año ${i+1}: `)

    let autoNuevo = new auto(marca, modelo, año)

    autos.push(autoNuevo);

    console.log('---------------------------------------');
}

console.log(autos);
