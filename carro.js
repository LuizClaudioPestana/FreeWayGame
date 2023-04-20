//Reduzindo as variáveis para Lista

let xCarros = [540, 540, 540, 540, 540, 540];
let yCarros = [40, 97, 149, 210, 270, 318];
let velocidadeCarros = [2, 2.6, 3.3, 5, 3.6, 2.1];
let comprimentoCarro = 50;
let alturaCarro = 40;


//Mostra carro
function mostraCarro() {
  
  for (let i = 0; i < imagemCarros.length; i++) {
  
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

//movimenta o carro
function movimentaCarro(){
  
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  
  }
  
}

//Volta a Posição Inicial
function voltaPosicaoInicialDoCarro() {
  
  for (let i = 0; i < imagemCarros.length; i++) {
    
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600; 
  }
 }
}

//Verificando se o xCarros[0] é menor que -50(tela)

function passouTodaATela(xCarro) {
  
  return xCarro < -50;
}