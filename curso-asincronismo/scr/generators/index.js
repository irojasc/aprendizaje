function* gen(){  //esto permite pausar algo o continuar cuando lo queramos asi
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array){
    for(let i of array){
        yield i;
    }
}

const i = iterate(['oscar', 'omar', 'ana', 'lucia', 'juana']);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);