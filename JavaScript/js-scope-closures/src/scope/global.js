//variables

var a; //declarando
var b = 'b'; //declarando y asignamos
b = 'bb'; // re-asignacion
var a = 'aa' //re-declaracion


//Global Scope

var fruit = 'apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia'; //esta variable es global por no estar esta inicializada, no importa que este dentro de una funcion
}

console.log(country);

