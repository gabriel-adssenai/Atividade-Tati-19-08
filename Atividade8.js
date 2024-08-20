let estaLogado = true; 
let temPermissaoAdmin = false; 


let podeAcessarFuncionalidade = estaLogado && temPermissaoAdmin;


if (podeAcessarFuncionalidade) {
    console.log("O usuário pode acessar a funcionalidade.");
} else {
    console.log("O usuário NÃO pode acessar a funcionalidade.");
}