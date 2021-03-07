console.log(`Trabalhando com Listas`);

const salvador =`Salvador`; 
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

    console.log(`Destinos possíveis:`);
    console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //adiconando na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); //deletar Rio de Janeiro
console.log(listaDeDestinos);
console.log(`Destino `+listaDeDestinos[2] + " está disponível");


console.log(listaDeDestinos[0], listaDeDestinos[1]);
