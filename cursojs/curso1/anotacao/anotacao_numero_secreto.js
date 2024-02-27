alert('anotação1')
/*
anotacao1:
Para criar o jogo, o computador precisa determinar e guardar/memorizar o número.
O conceito de variável em programação serve para justamente isso. Ao criar uma variável dentro de um código,
é possível armazernar uma informação ali dentro que pode ser buscada, referenciada ou anunciada posteriormente no código.
*/

alert('anotação2')
/*
 anotacao2:
As Template Strings são uma funcionalidade do JavaScript que facilita a criação de strings complexas. 
Elas são delimitadas por crases (\`) em vez de aspas simples ou duplas, e podem conter expressões embutidas.

As expressões embutidas são delimitadas por `${` e `}`. 
Dentro dessas chaves, você pode colocar qualquer expressão JavaScript, incluindo variáveis, que será avaliada e convertida em string.

Aqui está um exemplo:
 */

let nome = "João";
let saudacao = `Olá, ${nome}!`; // Resultado: "Olá, João!"

/**
Neste exemplo, a variável `nome` é incorporada na string usando a sintaxe de expressão embutida.
Quando a string é avaliada, a expressão `${nome}` é substituída pelo valor da variável `nome`.

As Template Strings também suportam strings multilinhas sem a necessidade de caracteres de escape de nova linha. Por exemplo:

let texto = `Isto é
uma string
multilinhas`;
 */

alert('anotação3')

/**
 O operador ternário em JavaScript é um operador condicional que possui três operandos.
 Ele é frequentemente usado como um atalho para a instrução `if`¹. A sintaxe do operador ternário é a seguinte:

condicao ? expressao1 : expressao2

- `condicao`: Uma expressão que é avaliada como verdadeira ou falsa.
- `expressao1`: Esta expressão é avaliada e retornada se a condição for verdadeira.
- `expressao2`: Esta expressão é avaliada e retornada se a condição for falsa¹.

Por exemplo, para exibir uma mensagem diferente baseada no valor da variável `isMember`, você poderia utilizar o seguinte código:

"The fee is " + (isMember ? "$2.00" : "$10.00");

Neste caso, se `isMember` for verdadeiro, a taxa será de `$2.00`. Se `isMember` for falso, a taxa será de `$10.00`¹.

O operador ternário pode ser muito útil para tornar seu código mais conciso e fácil de ler, especialmente em situações mais simples².

(1) Operador Condicional Ternário - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator.
(2) Operador Ternário JavaScript – Torne Seu Código Mais Legível. https://www.hashtagtreinamentos.com/operador-ternario-javascript.
(3) Operador Condicional Ternário - JavaScript | MDN - MDN Web Docs. https://bing.com/search?q=operadores+tern%c3%a1rios+em+javascript.
(4) Operador Ternário JavaScript: Uma Alternativa Concisa ao if else. https://ehgomes.com.br/javascript/ternario-javascript/.
(5) Operador JavaScript Ternário (com exemplos). https://pt.wiki-base.com/7779940-javascript-ternary-operator.
 */