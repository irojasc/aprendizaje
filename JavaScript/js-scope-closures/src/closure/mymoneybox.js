function moneyBox(){
    let saveCoins = 0;
    function sumCoins(coins){
        saveCoins += coins;
        console.log("El monto que tienes Ivan es: " + saveCoins);
    }
    return sumCoins;
}

