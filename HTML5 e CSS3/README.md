# Aula_HTML

Curso Aluro - Instrutor Pedro Marins
Aula: HTML5 e CSS3 part1: a primeira página Web

*TAGS*

* Título

  ```
  <h1>  </h1>
  ```

* Parágrafo

  ```
  <p>  </p>
  ```

* Negrito

  ```
  <strong>  </strong>
  ```

* Itálico

  ```
  <em>  </em>
  ```

* Estrutura básica

  *  Definir a versão do HTML

  ```
  <!DOCTYPE html>
  ```

  * Marca o conteúdo a ser renderizado no navegador
    * Propriedade "lang" idioma da página

  ```
  <html lang="pt-br">  </html>
  ```

* Passar as informações do *encoding* da nossa página para o navegador

  * Propriedade "charset"

  ```
  <meta charset="UTF-8">
  ```

* Texto
  * No alinhamento deles (text-align)
  * No tamanho da fonte (font-size)
  * Na cor de fundo (background)
  * Na cor do texto (color)

  * Elemento borda
    * Pode ser resumido em --> border: 2px solid #000000;
    ```
    border-color: #000000;
    border-width: 2px;
    border-style: solid;
    ```
    * Borda arredondada
    ```
    border-radius: 10px 20px 30px 40px;
    ```

    * Algumas pseudo-classes CSS
      * quando o usuário passa o cursor sobre o elemento
      ```
      produtos li:hover {
      ```
      * active, quando um elemento está sendo ativado pelo usuário
      ```
      .produtos li:active{
      ```
    * Input:
      * radio
      * checkbox

    * Select:
      * itens --> <option>

    * http://mobileinputtypes.com/
    
    * Alguns tipos de inputs para celular: email, tel, number, password, date, datetime, month e search

    *  fieldset e legend

    * Como adicionar uma alternativa à imagem, descrevendo-a, com o atributo alt

    * A realizar transições nos nossos elementos, com a propriedade CSS transition

    * A realizar transformações nos nossos elementos, como aumentar proporcionalmente a escala de determinado elemento ou rotacioná-lo, através da propriedade CSS transform

    * Table
      * tr linha da tabela
      * td célula
      * thead cabeçalho
      * tbody corpo
      * ht célula do cabeçalho
      * tfoot rodapé

    * Seletores avançados CSS
      * Seletor >, para acessar os filhos de determinado elemento.
      ```
      main > p {}
      ```
      * Seletor +, para acessar o primeiro irmão de determinado elemento. 
      ```
      img + p {}
      ```
      * Seletor ~, para acessar todos os irmãos de determinado elemento.
      ```
      img ~ p {}
      ```
      * Seletor not, para acessar os elementos, exceto algum.
      ```
      main p:not(#missao) {}
      ```
    * Proprieda calc
    * opacidade opacity
    * sombra em elemento bax-shadow
    * sombra em texto text-shadow




