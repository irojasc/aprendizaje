const values_ = document.getElementById("values");
const mean_value = document.getElementById("valor_promedio");
const median_value = document.getElementById("valor_mediana");
const moda_value = document.getElementById("valor_moda");
const btn_calculate = document.querySelector(".btn_calculate");

btn_calculate.addEventListener('click', calcularValores);


function calcularValores(){
    let arra = String(values_.value).split(' ');
    arra = arra.map(function(x){ return parseInt(x,10); });
    arra = arra.sort((a,b)=>a-b);
    
    // arrow function: () => {} , no necesita colocar return
    const sum = arra.reduce((a, b) => Number(a) + Number(b));
    const indice = arra.reduce((a, b, i) => (Number(i) % 2 == 1 ? true : false));

    const objModa = {}

    for(let i of arra){
        if (objModa[i])
            objModa[i] += 1;
        else
            objModa[i] = 1;
    }

    let objModa_ = Object.entries(objModa);
    objModa_ = objModa_.sort((a,b)=>b[1] - a[1]);
    
    let indexSup = Math.ceil(arra.length / 2.0) - 1;
    let indexInf = Math.floor(arra.length / 2.0) - 1;
    let mediana = 0;

    if (indice) {
        mediana = ((Number(arra[indexSup]) + 1) +  Number(arra[indexInf])) * 0.5;
    }else{
        mediana = arra[indexSup];
    }

    mean_value.innerText = "El valor promedio es: " + sum/(arra.length);
    median_value.innerText = "El valor de la mediana es: " + mediana;
    moda_value.innerText = "El valor de la moda es: " + objModa_[0][0];
}