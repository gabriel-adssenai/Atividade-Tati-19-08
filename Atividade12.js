function verificarMaioridade(idade) {
    return idade >= 18;
}


let idadePessoa = 26;
let resultado = verificarMaioridade(idadePessoa);


if (resultado) {
    console.log("É maior de idade.");
} else {
    console.log("NÃO é maior de idade.");
}