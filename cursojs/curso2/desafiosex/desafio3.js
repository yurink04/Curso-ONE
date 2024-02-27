/*
Desafios

01.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

02.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

03.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
 Para isso, considere a cotação do dólar igual a R$4,80.

04.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro.

05.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

06.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

 */

alert('desafio1');
function mediaIMC(altura, peso){
    let  imc = peso/(alturaMetros*alturaMetros);
}

alert('desafio2');
function fatorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }

    let calculofatorial = 1;
    for(let i = 2; i <= numero; i++){
        calculofatorial *= i;
    }
    return calculofatorial;
}

// exemplo de uso
let numero = 5;
let resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

alert('desafio3')
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

  alert('desafio4');
  function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

  alert('desafio5')
  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

  alert('desafio6');
  function mostrarTabuada(numero1) {
    for (let i = 1; i <= 10; i++) {
      let resultado1 = numero1 * i;
      console.log(`${numero1} x ${i} = ${resultado1}`);
    }
  }
  
  // exemplo de uso
  let numero1 = 7;
  mostrarTabuada(numero);