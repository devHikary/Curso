import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo",11122233345);
const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);

const cliente2 = new Cliente("Alice",88822233345);
const contaCorrenteAlice = new ContaCorrente(cliente2,1001);

console.log("Número de contas criadas: " + ContaCorrente.numeroDeContas);

const contaPoupanca = new ContaPoupanca(500,cliente1,1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta = new ContaSalario(cliente1);
conta.depositar(100);
conta.sacar(10);

console.log(conta);

