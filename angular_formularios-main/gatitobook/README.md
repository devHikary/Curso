# Gatitobook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Aula 1
- Começamos um projeto utilizando o `angular/cli` como ferramenta de apoio em todo nosso fluxo de trabalho. Utilizando a opção `-strict`, ligamos mais verificações de tipo no nosso projeto, melhorando logo na largada a nossa qualidade do nosso código.
- Aprendemos como configurar o Bootstrap como framework de CSS global para nossa aplicação.
- Começamos também a estruturar nossa aplicação utilizando o módulo Angular. Com a técnica do lazy loading, melhoramos o carregamento inicial da nossa aplicação.
- Estudamos também como é composto um componente Angular e quais são os arquivos que o `angular/cli` gera para nós.
- Começamos a desenvolver nossa primeira funcionalidade: o formulário de Login.

## Aula 2
- Como interagir com nosso backend utilizando o serviço `HttpClient` do Angular.
- Como utilizar o mecanismo de Injeção de dependência do Angular para criar nossos próprios serviços e injetá-los nos nossos componentes.
- Vimos também como criar um formulário do tipo Template Driven, em que toda a montagem e a regra de negócio ficam no arquivo de template, e o Angular realiza o controle do modelo de dados utilizando o componente `ngModel`.
- Criamos um componente de mensagens genérico e aprendemos como receber parâmetros utilizando o `@Input` e como mostrar conteúdo dinâmico utilizando a interpolação do Angular.
- Por fim, implementamos as validações do nosso formulário HTML utilizando o `ngModel` para pegar a referência do campo para avaliar se ele está válido ou não.

## Aula 3
- Como criar um formulário utilizando a técnica de formulários reativos, em que nós temos um pouco mais de configurações, mas ganhamos mais possibilidades e controle sobre o formulário.
- Estudamos a diretiva `routerLink` e como o Angular analisa o caminho passado, avaliando primeiro a rota do módulo do componente e depois a rota global.
- Criamos o serviço de cadastro de novo usuário e utilizamos a boa prática de criar uma interface para o retorno do backend e assim termos melhor produtividade e menos erros.

## Aula 4
- Exploramos o tópico de validações em formulário reativos no Angular. e aprendemos como aplicar validações comuns e padronizadas no nosso componente do nosso formulário, além de usar a classe utilitária `Validators`, padrão do Angular.
- Criamos uma validação customizada para um campo e vimos quais são os requisitos para uma função ser reconhecida como validação no Angular.
- Também trabalhamos em uma função de validação que avaliava mais do que um campo do nosso formulário.
- Por fim, criamos uma validação que consulta o backend da nossa aplicação e aprendemos sobre os operadores RXJS, uma biblioteca poderosa que o Angular utiliza.
