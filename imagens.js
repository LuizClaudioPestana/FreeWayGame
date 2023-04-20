// Salva as imagens na memória
let imagemDaEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//Sons do Jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

// Pré-carregamento das imagens, seguindo o local do arquivo
function preload() {
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemAtor = loadImage("images/ator-1.png");
  imagemCarro1 = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3"); 
  somDoPonto = loadSound("sons/pontos.wav");
  
}