const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';
// const API2 = 'https://placebear.com/200/300';


// funcion principal que obtiene informacion del producto como
// objeto
function fetchData(urlApi, callback){
    //inicia el objeto de tipo xmlhttpRequest
    let xhttp = new XMLHttpRequest();
    //El metodo open realiza la apertura de
    //comunicacion, el metodo puede ser GET o POST
    //, luego se envia la URL, si es asincrono true o false
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        //En este metodo se almacena el nombre de la funcion que se ejecuta
        //cuando el objeto xmlHttpRequest cambia de estado
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                //Se ejecuta el callback recibiendo como argumentos un objeto, como
                //la respuesta de la API en un texto plano, el metodo JSON.parse, transforma
                //este texto en un objeto. El atributo devuelve el DOMString que contiene la
                //respuesta a la consulta como un texto o null si la consulta no tuvo exito
                //o no fue completada 
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    };
    xhttp.send();
}


//Se invoca el metodo  fetchData() pasando la variable API, concatenada con products
//Y una funcion anonima que recibe 2 parametros 
fetchData(`${API}/products`, function(error1, data1){
// fetchData(`${API2}`, function(error1, data1){
    //Se valida si existe algun error, en caso exista se detiene el proceso
    if(error1) return console.error(error1);
    // Se invoca nuevamente la funcion fetchdata con el fin de acceder a un objeto puntual
    // del arreglo data1, se envia como parametro la url de la API apuntando al atributo del
    // primer objeto
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
