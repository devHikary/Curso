console.log(`Trabalhando com Loops`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
const idadeComprador = 32;
const estaCompanhada = false;
let passagenComprada =  false;
const destino = "São Paulo";



console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = (idadeComprador>=18)||(estaCompanhada);

let cont = 0;
let destinoExiste = false;
while(cont<3){
  if(listaDeDestinos[cont] == destino){
    destinoExiste = true;
    break;
  }
  cont += 1;
}
console.log("Destino existe: " + destinoExiste);

if(podeComprar && destinoExiste){
  console.log("Boa viagem!");
}else{
  console.log("Erro!");
}
