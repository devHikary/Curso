console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
const idadeComprador = 32;
const estaCompanhada = 0;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// if(idadeComprador>=18){
//   listaDeDestinos.splice(1,1);
// }else{
//   if(estaCompanhada){
//     console.log(`Éstá acompanhada`);
//     listaDeDestinos.splice(1,1);
//   }else{
//     console.log(`Comprador menor de idade e não está acompanhada`);
//   }    
// }

if((idadeComprador>=18)||(estaCompanhada)){
  listaDeDestinos.splice(1,1);
  if(estaCompanhada){
    console.log(`Éstá acompanhada`);
  }
}else{
  console.log(`Comprador menor de idade e não está acompanhada`);
}    

console.log(listaDeDestinos);
