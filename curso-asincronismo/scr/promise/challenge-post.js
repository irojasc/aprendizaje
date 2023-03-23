import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1";


function postData(urlApi, data){
    const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors', //origen cruzado, para peticiones entre dominios diferentes 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json' //indica que lo que se envia es de tipo json
    },
    body: JSON.stringify(data), //stringufu convierte un objeto JS en una cadena de texto JSON
    });
    return response;
}

const data = {
    "title": "Fierro catre botella",
    "price": 990,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));
