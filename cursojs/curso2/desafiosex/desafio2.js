/**
Desafios

1.Criar uma função que exibe "Olá, mundo!" no console.

2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4.Criar uma função que recebe três números como parâmetros e retorna a média deles.

5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

 */

alert('desafio1');
function desafio1(){
    console.log('Olá, mundo!');
}
desafio1();

alert('desafio2');
function exibirNome(nome){
    console.log(`Olá, ${nome}`);
}
exibirNome('Samuel Yuri');

alert('desafio3');
function multiplicaNumero(numero){
    return numero*2;
}
let resultado = multiplicaNumero(5);
console.log(multiplicaNumero);

alert('desafio4');
function mediade3(a, b, c){
    return (a+b+c)/3;
}
let media = mediade3(4,7,10);
console.log(media);

alert('desafio5');
function encontraMaior(anum,bnum){
    return anum>bnum? anum:bnum;
}
let maiorNumero=encontraMaior(15,29);
console.log(maiorNumero);

alert('desafio6');
function quadrado(numero){
    return numero*numero;
}
let resultado1=quadrado(5);
console.log(resultado1);
