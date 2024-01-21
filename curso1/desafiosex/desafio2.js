/*
Desafios

01.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".

02.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

03.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".

04.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

05.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
 */

console.log('desafio01');
diaDaSemana = prompt("Qual é o dia da semana?");
if(diaDaSemana == 'Sábado'){
    alert("Bom final de semana!");
}
else if(diaDaSemana == "Domingo"){
    alert("Bom final de semana!");
}
else{
    alert("Boa semana!");
}

console.log('desafio02');
numero = prompt("Insira o número:");
if(numero > 0){
    alert("Este número é positivo!");
}
else{
    alert("Esse número é negativo!");
}

console.log("desafio03");
alert("Bem vindo ao menu de pontuação!");
pontos = prompt("Informe sua pontuação:");
if(ponto > 100){
    alert(`Sua pontuação é de ${pontos}. Parabéns, você venceu!`);
}
else{
    alert(`Sua pontuação é de ${pontos}. Tente novamente para ganhar :(`);
}

console.log("desafio04");
alert('Bem vindo ao informe de saldo!');
let saldo = 500;
alert(`O seu saldo disponível é de: R$${saldo}.`);

console.log("desafio05");
let nome = prompt("Insira o seu nome:");
alert(`Olá, ${nome}. Bem-vindo!`);