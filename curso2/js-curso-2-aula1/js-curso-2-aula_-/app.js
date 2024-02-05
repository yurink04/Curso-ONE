//manipulando HTML com javascript - anotacao1

let numeroSecreto = gerarRandomNum();
let tentativas = 1;
/*
 Esta seção comentada trata-se do código anterior para puxar o campo no HTML e declarar o seu conteúdo.
 
let titulo = document.querySelector('h1'); //document possibilita a interação do js com html, fornecendo métodos e propriedades
para manipular -  anotacao2

//querySelector define que parte vamos manipular do HTML
titulo.innerHTML = ('Jogo do Número Secreto '); //innerHTML é uma propriedade do objeto ELEMENT que permite obter ou definir 
o conteudo HTML de um elemento

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = ('Escolha um número entre 1 e 10');
*/

//declarando a função que irá chamar o elemento HTML e definir seu contúedo
function exibirTextoNaTela(tag, texto){ //declarando quais campos a função irá modificar no HTML 
    let campo = document.querySelector(tag); //chamando o campo 
    campo.innerHTML = texto; //declarando o que o campo irá receber
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial(); 

function verificarChute(){ //responsável por determinar uma ação para parte do código
    let chute = document.querySelector('input').value;
   // console.log(chute ==  numeroSecretof); //verifica para o dev que a interação ocorreu
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa= tentativas >1? 'tentativas':'tentativa';
        let tentativatotal =(`Você descobriu  o número secreto com  ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('p',tentativatotal);
        document.getElementById('reiniciar').removeAttribute('disabled'); //o comando por si só não será o suficiente para reiniciar o jogo
        /* o comando 'document.getElementById' vai chamar determinada seção do html pelo o seu ID, ou identificador único, 
        não sendo necessário informar que tipo de elemento é no HTML.
        Neste caso, o botão está desativado, no HTML o seu tributo está como disabled. 'removeAttribute' será resposável por 
        remover o atributo, que neste caso é que o botão esteja desativado, quando for chamado*/
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor.');

        }else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
       //tentativas = tentativas+1; pode ser substituído por:
       tentativas++; 
        limparCampo(); //essa função será resposável por limpar a o input realizado pelo usuário no campo
    }
    
}

function gerarRandomNum() {
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo(){ //declarando a função
    chute=document.querySelector('input'); //declarando o tipo de ação
    chute.value=''; //chute recebe o valor em branco, fazendo com que o campo seja limpo
}

function reiniciarJogo(){
    numeroSecreto = gerarRandomNum(); //gera um novo número aleatório
    limparCampo();//limpa o campo
    tentativas=1;//zera tentativas
    mensagemInicial();//exibe mensagem inicial
    document.getElementById('reiniciar').setAttribute('disabled', true); //funçao que seta atributo no elemento HTML
}

//array = listas
//criando listas em java script


