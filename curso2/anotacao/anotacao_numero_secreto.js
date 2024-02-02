alert('anotação 1');
/*
O HTML pode ser manipulado através da linguagem de programação (como o js) sem precisar ser alterado. 
Isto se torna interessante a partir do ponto de vista de que esse tipo de manipulação pode ser usado 
para deixar o código e, consequentemente, o front end dinâmico. Pensando desta forma, o HTML de um projeto
pode ser desenvolvido de forma que não precise ser alterado, mas sim usado de base.
 */
alert('anotação 2');
/**
Em JavaScript, `document` é um objeto que representa a página web carregada no navegador e serve como ponto
de entrada para o modelo de objeto de documento, ou DOM¹³. O DOM é uma representação da estrutura da página web que permite
ao JavaScript manipular o conteúdo, a estrutura e o estilo da página¹.

O objeto `document` fornece métodos e propriedades para acessar e manipular partes da página web.
Por exemplo, você pode usar `document.getElementById(id)` para obter um elemento com um ID específico,
ou `document.createElement(tagName)` para criar um novo elemento HTML¹.

Aqui está um exemplo de como o objeto `document` pode ser usado para alterar o conteúdo de um elemento HTML:

document.getElementById("meuElemento").innerHTML = "Novo conteúdo";

Neste exemplo, o método `getElementById` é usado para obter um elemento com o ID "meuElemento",
e a propriedade `innerHTML` é usada para alterar o conteúdo desse elemento¹.

Portanto, o objeto `document` é uma parte essencial da interação do JavaScript com o conteúdo da página web¹³.

(1) O que é DOM (Document Object Model)? Trabalhando com DOM em JavaScript. https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039.
(2) Objeto document: DOM em JavaScript (Modelo de Objeto de Documentos). https://bing.com/search?q=o+que+%c3%a9+um+document+em+javascript.
(3) Noções básicas de JavaScript - Aprendendo desenvolvimento web | MDN. https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics.
(4) Objeto document: DOM em JavaScript (Modelo de Objeto de Documentos). https://www.javascriptprogressivo.net/2019/01/DOM-Modelo-Objeto-Documentos.html.
 */