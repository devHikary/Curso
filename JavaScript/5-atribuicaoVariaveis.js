console.log("Trabalhando com Atribuição de Variáveis");

//let utilizado quando a variavel varia
//const variavel que não muda

const idade = 4;
let primeiroNome = "Ricardo";  //const nome = "Ricardo";
const sobrenome = "Silva";
let contador = 1;

console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//nome = nome + sobrenome; como foi declarado como constante não pode fazer a operação abaixo 
nomeCompleto = primeiroNome + " " + sobrenome;

console.log(`Meu nome é ${nomeCompleto}`)