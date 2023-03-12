function fruits(){
    if(true){
        var fruta1 = "Apple"; //function scope
        let fruta2 = "Kiwi"; //block scope
        const fruta3 = "Banana"; //block scope
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

// que es un bloque?
// todo lo que se encuentre dentro de {}