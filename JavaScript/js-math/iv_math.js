const ivMath = {};

ivMath.calcMedian = function(list){

    let indexSup = Math.ceil(list.length / 2.0) - 1;
    let indexInf = Math.floor(list.length / 2.0) - 1;

    let indice =  list.reduce((a, b, i) => (Number(i) % 2 == 1 ? true : false));
    if (indice) {
        return (Number(list[indexSup + 1]) +  Number(list[indexInf])) * 0.5;
    }else{
        return arra[indexSup];
    }
};