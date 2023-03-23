setTimeout(()=>{console.log("Hola Js")}, 2000);


function gretting(name){
    console.log("Hola " +  name);
}

setTimeout(gretting, 2000, "Ivan"); // este caso gretting es un callback