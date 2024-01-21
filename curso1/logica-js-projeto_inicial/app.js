//alert("Olá mundo!");

alert('Boas vindas ao jogo do número secreto')

/*

Para criar o jogo, o computador precisa determinar e guardar/memorizar o número.
O conceito de variável em programação serve para justamente isso. Ao criar uma variável dentro de um código,
é possível armazernar uma informação ali dentro que pode ser buscada, referenciada ou anunciada posteriormente no código.

*/

// para armazernar uma informação em js, usa-se LET
let numeroSecreto = 29; //LET informa para o interpretador que vai existir um espaço na memória que vai ser guardada uma informação

/* é possível declarar uma várivel onde o usuário escolhe qual informação vai ser atribbuída e armazenada nele*/
let chute = prompt('Escolha umm número entre 1 e 30') //comando que serve para usuário inputar informação de acordo com caixa de texto

/* Para jogar esse jogo de advinhação, é preciso o uso de condições e loop, gerando os acertos e erros */

/* //esse comando if numero secreto for igual chute determina que essa condição sera acionada somente se o valor inputado pelo 
usuário for o mesmo valor que já está determinado pela variavel numeroSecreto  */
if (numeroSecreto == chute){ 
 //existe um local de teste dentro do proprio cod
 console.log('Isso aí! Você descobriu o número secreto (5)')   
}