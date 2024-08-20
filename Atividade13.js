

function ehPalindromo(str) {
    
    let strLimpa = str.replace(/\s+/g, '').toLowerCase();
    
  
    let strReversa = strLimpa.split('').reverse().join('');
    
    
    return strLimpa === strReversa;
}


let palavra = 'Ovo';
let resultado = ehPalindromo(palavra);


if (resultado) {
    console.log(`'${palavra}' é um palíndromo.`);
} else {
    console.log(`'${palavra}' NÃO é um palíndromo.`);
}
