const btn = document.getElementById("btn_discount");
const precio = document.getElementById("precio");
const descuento = document.getElementById("discount");
const gift = document.getElementById("gift-card");
const resultTXT = document.getElementById("result");

btn.addEventListener('click', calcularPrecioDescuento);

const couponObj = {
    "Ivan": 30,
    "Rick": 40,
    "Miguel": 20
};

const couponArray = [];
couponArray.push({
    name: 'Liliam',
    discount: 30,
});

function calcularPrecioDescuento(){
    // ((100 - dsct) / 100 ) * PV
    const price = precio.value; 
    const dsct = Number(descuento.value);
    const gift_card = gift.value;
    
    if(!price){
        resultTXT.innerText = "Es obligatorio el valor del precio";
    }
    else{
        if ((gift_card && dsct != 0)){
            resultTXT.innerText = "Solo debe ingresar descuento o cupon";    
        }
        else if(!gift_card && dsct != 0){
            const newPrice = (price * (100 - dsct)) * 0.01
            resultTXT.innerText = newPrice;
        }
        else if(gift_card && dsct == 0){
            if(couponObj[gift_card]){
                const newPrice = (price * (100 - couponObj[gift_card])) * 0.01
                resultTXT.innerText = newPrice;
            }
            else{
                resultTXT.innerText = "No se encontraron cupones";
            }
        }
    }
}