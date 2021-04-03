# Webpacks
Instrutor:
Curso Alura

## Aula 1
* O papel do webpack
* Instalação através do npm
* Configuração do webpack.config.js
* Como executar webpack através de um npm script
* O conceito de entry e output
* O papel de um loader
* Instalação e configuração de um loader

## Aula 2
* O efeito do parâmetro -p para o build de produção.
* A incompatibilidade do UglifyJS com código que não sejam escritos em ECMASCRIPT 5.
* babili como plugin que ajuda no processo de minificação.
* pegadinhas na atribuição de variáveis de ambiente.
* o módulo cross-env para garantir compatibilidade do nosso npm script entre diferentes sistemas operacionais.

## Aula 3
* O papel do Webpack Dev Server e suas vantagens como live reloading
* Como instalar o Webpack Dev Server através do npm
* A criação de um script para executar o servidor
* A importância da propriedade publicPath.

## Aula 4
* Como utilizar o npm para gerenciar nossas dependências frontend
* Como o Webpack lida com as dependências em node_modules adicionado-as no bundle da aplicação.
* O papel de loaders
* Que o padrão é adicionar no bundle scripts e CSS's
* Que podemos separar CSS's do bundle criado e importá-los através da tag link através do módulo `extract-text-webpack-plugin`.
* A utilizar o plugin `optimize-css-assets-webpack-plugin` para minificar CSS's importados se adicionados no style.css.

## Aula 5
* Que o Webpack importa scripts através da instrução `import` sem muito mistério.
* A necessidade de utilizar o webpack.ProvidePlugin.