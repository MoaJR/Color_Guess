function criarCores() {
    
   for(let i = 0; i<5; i++){
    const displayCores = document.querySelector(".displayCores");
    const cores = document.createElement('div') ;

    cores.className = 'cor';
    displayCores.appendChild(cores);
    
    cores.addEventListener('click', function(e){
        if(this.style.background.trim() == displayRGB.innerHTML){
            console.log("acertou");
            corRandom();
            sorteiaCor();
            pontuacaoMais();
            indicativoAcertou()
        }else{
            console.log("errou"); 
            pontuacaoMenos();
            indicativoErrou()
        }
    });
   }
}

function corRandom(){
    let r = 0;
    let g = 0;
    let b = 0;
    const displayCores = document.querySelector(".displayCores");
    const listaCores = displayCores.querySelectorAll("div");

    for(let i=0; i<5; i++){
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        listaCores[i].style.background = "rgb("+r+", "+g+", "+b+")";
    }

}

function sorteiaCor(){

    const displayCores = document.querySelector(".displayCores");
    const listaCores = displayCores.querySelectorAll("div");
    const rdn = Math.floor(Math.random()*5);

    sorteadoRGB = listaCores[rdn].style.background;
    displayRGB.innerHTML = sorteadoRGB
}

function pontuacaoMais(){
    pontos += 3;
    pontosDisplay.innerHTML = "Pontuação: "+pontos;
}

function pontuacaoMenos(){
    pontos --;
    pontos = pontos < 0 ? 0 : pontos;
    pontosDisplay.innerHTML = "Pontuação: "+pontos;
}

function indicativoAcertou(){
    indicativoDisplay.innerHTML = "Acertou!"
    setTimeout(function(){
        indicativoDisplay.innerHTML = ' ';
    }, 500);
}
function indicativoErrou(){
    indicativoDisplay.innerHTML = "Errou!"
    setTimeout(function(){
        indicativoDisplay.innerHTML = ' ';
    }, 500);
}

let displayRGB = document.querySelector(".displayRGB");
let pontosDisplay = document.querySelector(".pontos");
let indicativoDisplay = document.querySelector(".indicativo");

let pontos = 0;
    

criarCores();
corRandom();
sorteiaCor();