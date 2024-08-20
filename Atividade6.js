let saldo = 10000.00;   
let deposito = 3000.00;  
let saque = 450.00;    


let operacaoDeposito = saldo + deposito; 
let operacaoSaque = operacaoDeposito - saque; 


console.log("Saldo inicial:", saldo.toFixed(2));
console.log("Após depósito de", deposito.toFixed(2), "saldo é:", operacaoDeposito.toFixed(2));
console.log("Após saque de", saque.toFixed(2), "saldo final é:", operacaoSaque.toFixed(2));