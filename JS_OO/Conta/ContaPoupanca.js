import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
  constructor(saldoInicial,cliente, agencia){
    super(saldoInicial, cliente, agencia);
  }

    //sobrescreve o metodo sacar()
    sacar(valor) {
      const taxa = 1.02;
      return this._sacar(valor, taxa);
    }
}