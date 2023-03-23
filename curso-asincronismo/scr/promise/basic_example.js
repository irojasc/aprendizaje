
/* Implementación con promesas */
const doTask = (iterations) => new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true, //esta forma es interesante de reportar los errores
          message: "Se ha sacado un 6"
        });
        //reject(new Error('Error!'))
      }
    }
    resolve({
      error: false,
      value: numbers
    });
  });

doTask(10)
.then(result => console.log("Tiradas correctas: ", result.value))
.catch(err => console.error("Ha ocurrido algo: ", err.message));





// Esta parte explica que al crear el objeto promise, se ejecuta el codigo que esta dentro inmediatamente
// hasta que se resuelva lo que esta dentro

const promesa = new Promise((resolve,reject) => {
    console.log("Hola Mundo");
    setTimeout(()=>{
      resolve("Aqui termina toda");
    }, 2000);
});

console.log(promesa);
//para solucionar dicho problema, se utiliza la funcion asincrona asyn junto a await
async function asyncall(){
  const valor = await promesa; //esta funcion espera a la promesa
  console.log(valor);
}

asyncall();

// promesa.then((element)=>console.log(element + " la etapa de flojeria"));



