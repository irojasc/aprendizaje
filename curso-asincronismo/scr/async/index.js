const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)?setTimeout(()=>resolve('Async!!!'), 2000):reject(new error('Error!'));
    });
}

const anotherFn = async() => { //async para definir el cuerpo de la funcion
    const something = await fnAsync(); // va dentro de la funcion async
    console.log(something);|
    console.log("Hello!");
}

console.log("Before");
anotherFn();
console.log("After");