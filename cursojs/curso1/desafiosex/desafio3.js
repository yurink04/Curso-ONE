/*

Desafios

01 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

02 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

03 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

04 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

*/

console.log(desafio1)
let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

console.log(desafio2)
let contador1 = 10;
while(contador1 >= 0){
    console.log(contador1);
    contador1--;
}

console.log(desafio3)
 let numeroMax = prompt('Insira um número para contagem regressiva:');
 while(numeroMax >= 0){
    console.log(numeroMax);
    numeroMax--;
 }

 console.log(desafio4)
 let numeroMaximo = prompt('Insira um número para contagem progressiva:');
 let contador2 = 0;
 
 while(contador2 <= numeroMaximo){
    console.log(contador2);
    contador2++;
 }