let perimetro;
let areaCuadrado;
let perimetroTriangulo;
let areaTriangulo;
const PI = 3.1415;

console.group('Cuadrado y Triangulo');

/* var lado=prompt("Por favor ingrese el lado del cuadrado"); */
/* var ladoTri=prompt("Por favor ingrese los lados del triangulos").split(' '); */
/* perimetroCuadrado(Number(lado)); */
/* calculoTriangulo(Number(ladoTri[0]), Number(ladoTri[1]), Number(ladoTri[2])) */

/* CALCULO DE PROPIEDADDES DE UN CIRCULO */
//var radio=prompt("Por favor ingrese el radio del circulo");
//circleMaths(radio);

/* CALCULO DE LA ALTURA DE UN TRIANGULO ISOSCELES */
var ladoIsosc =prompt("Por favor, ingrese el lado y la base del ttriangulo isosceles").split(' ');
heightCalculate(Number(ladoIsosc[0]), Number(ladoIsosc[1]));


function  perimetroCuadrado(lado){
    perimetro = 4 * lado;
    areaCuadrado = lado * lado;
    alert("El perimetro del cuadrado es: " + perimetro + 
    "\nEl area del cuadrado es: " + areaCuadrado);
}

function calculoTriangulo(lado1, lado2, lado3){
    perimetroTriangulo = lado1 + lado2 + lado3;
    var s = perimetroTriangulo * 0.5;
    console.log('%c Hola Mundo', 'color: red; font-size: 20px;');
    areaTriangulo = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
    alert("El perimetro del triangulo es: " + perimetroTriangulo + 
    "\nEl area del triangulo es: " + areaTriangulo);
}

console.groupEnd('Cuadrado y Triangulo');



/* Esta parte calcula las propiedades de un circulo */
console.group('circle maths')

function circleMaths(radio){
    var perimetroCirculo = 2 * Math.PI * radio;
    var areaCirculo = Math.PI * (Math.pow(radio, 2)); //esta funcion es para elevar un numero a un potencia
    alert("El perimetro del circulo es: " + perimetroCirculo + 
    "\nEl area del circulo es: " + areaCirculo);
} 

console.groupEnd('circle maths');

/* Esta parte calcula la altura de un triangulo isoceles no equilatero */

function heightCalculate(lado, base){
    if(lado == base)
        console.warn('Este no es un triangulo isosceles');
    else{
        var height = Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2) * 0.25));
        alert("La altura del triangulo Isosceles es: " + height);
    }
}







