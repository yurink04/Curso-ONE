//alert("Olá mundo!");
alert('Boas vindas ao jogo do número secreto'); // anotacao1
// para armazernar uma informação em js, usa-se LET
let numeroMaximo = parseInt(Math.random() * 3000 + 1);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //LET determina um espaço na memória que vai ser guardada uma informação
console.log(numeroSecreto);
// é possível declarar uma várivel onde o usuário escolhe qual informação vai ser atribbuída e armazenada nele
let chute;  //comando que serve para usuário inputar informação de acordo com caixa de texto
/* Para jogar esse jogo de advinhação, é preciso o uso de condições e loop, gerando os acertos e erros */
let tentativas = 1;
//para que o jogo possibilite que o usuário 
while(chute != numeroSecreto){
    chute = prompt(`Escolha umm número entre 1 e ${numeroMaximo}`);
/* o comando if numero secreto for igual chute determina que a condição sera acionada somente se o valor inputado pelo 
usuário for o mesmo valor que já está determinado pela variavel numeroSecreto  */
    if (chute == numeroSecreto){
        break; //o break sinaliza de que, se a condição for verdadeira, o while não irá rodar
        //uso de template strings - anotacao2
            }
        else{//senao
            if( chute>numeroSecreto){
                alert('O número secreto é menor que '+chute); 
                }
        else{
            alert('O número secreto é maior que '+chute);
                }
            }
            //tentativas = tentativas + 1;
            tentativas++ //mesmo comportamento que tentativas = tentativas+1
}
//o operador ternário pode ser utilizado para substituir ifelse. Muito utilizado no mercado
let palavraTentativa = tentativas >1? 'tentativas' : 'tentativa' //operador ternário - anotacao3
alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}` );
/*if(tentativas > 1){
alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} tentativas.` );
}
else{
    alert(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto} com ${tentativas} tentativa.` );
}*/