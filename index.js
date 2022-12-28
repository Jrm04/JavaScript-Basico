const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const butn1 = document.getElementById('btnCalcular');
const p1 = document.getElementById('result'); 

//butn1.addEventListener('click', ()=>{
form.addEventListener('submit', (event)=>{
    const suma = parseInt(input1.value) + parseInt(input2.value);
    p1.innerHTML = `Resultado = ${suma}`;
    event.preventDefault(); //Sirve para que no se recargue la pagina cuando estamos trabajando con formularios en HTML
    console.log(event)
    
});





