//alert("Olá mundo!");

alert('Boas vindas ao jogo do número secreto') // anotacao1

// para armazernar uma informação em js, usa-se LET
let numeroSecreto = 29; //LET determina um espaço na memória que vai ser guardada uma informação
console.log(numeroSecreto)
// é possível declarar uma várivel onde o usuário escolhe qual informação vai ser atribbuída e armazenada nele
let chute = prompt('Escolha umm número entre 1 e 30'); //comando que serve para usuário inputar informação de acordo com caixa de texto
/* Para jogar esse jogo de advinhação, é preciso o uso de condições e loop, gerando os acertos e erros */

/* o comando if numero secreto for igual chute determina que a condição sera acionada somente se o valor inputado pelo 
usuário for o mesmo valor que já está determinado pela variavel numeroSecreto  */
if (numeroSecreto == chute){ 
//uso de template strings - anotacao2
 alert(`Isso aí! Você descobriu que o número secreto é:${numeroSecreto}`);   
} else {//senao

    alert('Você errou! :(') 
}