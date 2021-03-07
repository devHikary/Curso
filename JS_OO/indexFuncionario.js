import { Gerente } from "./Funcionários/Gerente.js"; 
import { Diretor } from "./Funcionários/Diretor.js"; 
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"; 

const diretor = new Diretor("Amanda", 10000, 11122233345);
diretor.cadastrarSenha(123);
const gerente = new Gerente("Karina", 5000, 44422233345);

const estaLogado = SistemaAutenticacao.login(diretor, 123);
console.log(estaLogado);

