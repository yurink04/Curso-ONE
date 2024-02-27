//manipulando HTML com javascript - anotacao1
let listaDeNumerosSorteados = []; // é de boa prática declarar as listas no começo do código
let numeroLimite = 10;
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
    resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // verifica a quantidade de elementos que foram declarados na lista 

    if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados=[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarRandomNum; /*o código irá verificar se o número escolhido já foi chamado, caso sim, chamará outro.
        O detalhe é que esse comando apenas verifica e chama outro, caso todos os números sejam chamados, ele não chamará mais */
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido) //o push adiciona o elemento no final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
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
//array = listas - anotacao2
//criando listas em java script


//pesquisar sobre responsive voice