let temAcesso = false; 
let temPermissaoEspecial = true; 


let podeAcessar = temAcesso || temPermissaoEspecial;


if (podeAcessar) {
    console.log("Pelo menos uma das condições é verdadeira.");
} else {
    console.log("Nenhuma das condições é verdadeira.");
}