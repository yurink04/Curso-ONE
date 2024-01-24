/*
Desafios finais

01.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

02.Crie uma variável chamada "nome" e atribua a ela o seu nome. 
Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

03.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

04.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

05.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

06.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

07.Peça ao usuário para inserir sua idade com prompt. 
Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

08.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
Use if-else para imprimir a respectiva mensagem.

09.Use um loop while para imprimir os números de 1 a 10 no console.

10.Crie uma variável "nota" e atribua um valor numérico a ela. 
Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

11.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

12.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

13.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

console.log('desafio1');
console.log('Boas vindas ao desafio final!');

console.log('desafio2');
let nome = Samuel;
console.log(`Olá, ${nome}!`);

console.log('desafio3');
let nome1 = Yuri;
alert(`Olá, ${nome1}!`);

console.log('desafio4');
let nomecod = prompt('Qual sua linguagem de programação preferida?');
console.log('Que legal! Sua linguagem de programação preferida é' +nomecod);

console.log('desafio5');
let valor1 = 2004;
let valor2 = 2003;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);


console.log('desafio6');
let valor01 = 2004;
let valor02 = 2003;
let resultado1 = valor01 - valor02;
console.log(`A diferença de ${valor01} e ${valor02} é igual a ${resultado1}`);

console.log('desafio7');
let idade = prompt('Insira sua idade:');
if(idade < 18){
    alert(`Você tem ${idade} anos. Você é menor de idade.`);
}else{
    alert(`Você tem ${idade} anos. Você é maior de idade.`);
}

console.log('desafio8')
var numero = parseFloat(prompt('Insira um número:'));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

console.log('desafio9')
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

console.log('desafio10')
let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log('desafio11')
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

console.log('desafio12')
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

console.log('desafio13')
let numeroInteiroAleatorio1 = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio1);