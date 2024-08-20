function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente);
}


let base = 2;
let expoente = 3;
let resultado = calculaPotencia(base, expoente);


console.log(`${base} elevado a ${expoente} é igual a ${resultado}.`);