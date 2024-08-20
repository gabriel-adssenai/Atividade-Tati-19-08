function encontrarMaiorNumero(a, b, c) {
    let maior;

    if (a >= b && a >= c) {
        maior = a;
    } else if (b >= a && b >= c) {
        maior = b;
    } else {
        maior = c;
    }

    return maior;
}


let numero1 = 10;
let numero2 = 25;
let numero3 = 15;
let maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);


console.log("O maior número é:", maiorNumero);
