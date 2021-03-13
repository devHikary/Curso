/*
Interface
Ser autenticavel significa ter o método autenticar()
duck type
*/

export class SistemaAutenticacao{
  static login(autenticavel, senha){
    if(SistemaAutenticacao.ehAutenticavel(autenticavel))
    {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  //Procura a chave "autenticar" e depois verificar se é função
  static ehAutenticavel(autenticavel){
    return "autenticar" in autenticavel &&
    autenticavel.autenticar instanceof Function;
  }

}