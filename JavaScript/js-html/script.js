// La parte de leer html en JS es similar a css
// h1 {color: red}
// .parrafito{ ...}
// #pid{....}

const h1 = document.querySelector('h1'); 
const h2 = document.querySelector('h2'); 
const p = document.querySelectorAll('p'); //este selecciona solo al primer selector p
//const p = document.querySelectorAll('p'); //este selecciona solo todos los selectores p
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('input');
const input2 = document.querySelector('#input2-calculo');
const btnCalcular = document.querySelector("btn-calcular");

console.log(input1.value); //

console.log({
    h1, p, parrafito, pid, input1}
);

/* (vvvvvvvv) Esto sirve para setear los valores textuales de un elemento html */
h1.innerHTML = "Rios profundos  <br> de Jose Maria Arguedas"; //Este cambia el valor del texto, tambien se puede incluir codigo HTML
h2.innerText = "Rios profundos <br> de Jose Maria Arguedas"; //Este cambia el valor netamente textual
//****para el caso de modficar un atributo value para input*/
input1.value = ""; //en esta parte se eliminar el contenido del input
input1.placeholder = "Hola causita";

/* (vvvvvvvv) Esto sirve para LEER valores de atributos y contenido textual */

console.log(p[2].outerText)  //imprimir el valor de <p> seleccionado 
console.log(h1.getAttribute('pantalla')); //esta parta imprime el nombre de la class de <p> 
console.log(p[1].getAttribute('class')); //esta parta imprime el nombre de la class de <p>

/* (vvvvvvvv) Esto sirve para SETEAR valores de los atributos*/

h1.setAttribute('class','rojo'); //setea una clase al elemento HTML
h1.classList.add('azul'); //esto agrega otra clase al elemento HTML !!MEJOR UTILIZAR ESTE!!
h1.classList.remove('rojo'); //esto retira la clase rojo del elemento HTML
//h1.classList.toggle revisar este otro metodo!
//h1.classList.contains revisar este otro metodo!



/*como crear un element nuevo de HTML*/
console.log(document.createElement('spam')); //solo basta poner el nombre, luego la funcion ya se encarga de abrir y cerrar el elemento
const img = document.createElement('img');
img.setAttribute('src', 'https://i.tribune.com.pk/media/images/Yuga-Labs-Bored-Ape-Yacht-Club-44661639472731-0/Yuga-Labs-Bored-Ape-Yacht-Club-44661639472731-0.jpg');
console.log(img);
pid.innerHTML = ""; //esto lo que hace es borrar el contenido html del elemento
pid.append(img); // agrega el elemento <img> dentro del elemento con id = "pid"
//pid.appendChild //tambien se puede utilizar esto


//En esta parte se ve el ejemplo de calculadora 
//para pasar valores strings a numero: Number(), parseInt(), colocar + delante el input
function btnOnClick(){
    const resultado = +input1.value + +input2.value;
    h1.innerText = "Resultado: " + resultado;
}




