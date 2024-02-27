/**
Desafios

01.Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

02.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

03.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

04.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

05.Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
*/
console.log('desafio1');
/*let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do desafio!');*/

console.log('desafio2');
/*
No index.html, adicionamos no onclick o seguinte código:
<button onclick="exibirMensagemNoConsole()" class="button">Console</button>

Já no app.js:
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}
*/

console.log('desafio3');
/*
No index.html, adicionamos no onclick o seguinte código:
<button onclick="exibirAlerta()" class="button">Alert</button>

Já no app.js:
function exibirAlerta() {
    alert('Eu amo Js')
}
*/

console.log('desafio4');
/*
 No index.html, adicionamos no onclick o seguinte código:
<button onclick="exibirPrompt()" class="button">Prompt</button>

Já no app.js:
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}
 */

console.log('desafio5');
/*
No index.html, adicionamos no onclick o seguinte código:
<button onclick="somandoDoisNumeros()" class="button">Soma</button>

Já no app.js:
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}
 
 */