# Primeiro Projeto em TypeScript
Curso Alura - Instrutor Flavio Henrique de Souza Almeida

## Aula 1
* Modelagem da classe Negociacao utilizando a sintaxe private.
* Instalação e configuração do compilador TypeScript
* A diferença entre o código que escrevemos e o código compilado
* O modificador de acesso private
* Compilação em tempo real dos arquivos .ts

### package.json
  "compile": "tsc",
  "start": "tsc -w"

### tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "alurabank/app/js",
    "noEmitOnError": true 
    },
  "include": [
    "alurabank/app/ts/**/*"
  ]
}

## Aula 2
* tipo implíto = any, quando não se declara o tipo da propriedade;
* Casting explícito
* string vs String e number vs Number

### tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "alurabank/app/js",
    "noEmitOnError": true,
    "noImplicitAny": true
    },
  "include": [
    "alurabank/app/ts/**/*"
  ]
}

## Aula 3
private _negociacoes: Array<Negociacao> = [];
é a mesma coisa de fazer
private _negociacoes: Negociacao[] = [];
* Criando de um novo modelo para encapsular uma lista de objetos do tipo Negociacao.
* Array e generics
* Manipulação declarativa do DOM através de template
* Template dinâmico

# Part2

## Aula 2
* Isso pode ser interessante para evitarmos valores nulos e indefinidos em nosso projeto.
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true, 
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system",
        "strictNullChecks": true
    },
    "include": [
        "app/ts/**/*"
    ]
}

## Aula 3
*Decorators
  * Decorators de métodos
  * Decorators de propriedades
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system",
        "strictNullChecks": true,
        "experimentalDecorators": true
    },
    "include": [
        "app/ts/**/*"
    ]
}

## Aula 4
* API externa
* Interface