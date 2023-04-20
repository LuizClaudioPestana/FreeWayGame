//Variáveis do Ator
let xAtor = 100; 
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

//Mostra ator na tela
function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

//Movimenta o ator
function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }   
  }
}

// Verificando Colisão

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();

      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
  
}
//Função que após colisão retorna ao ponto inicial
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;

}

//Incluir Pontos ao chegar ao final
function incluiPontos(){
  text(CENTER);
  textSize(35);
  fill(color(255, 255, 0));
  text(meusPontos, width / 5, 30); 
}

//Marcando Pontos
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1; 
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

//Perde pontos ao colidir
function pontosMaiorQueZero(){
  return meusPontos > 0;
}

//Não passar do nível inferior da tela
function podeSeMover(){
  return yAtor < 366;
}




