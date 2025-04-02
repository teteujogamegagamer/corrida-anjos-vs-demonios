// as teclas pra jogar são:
// A = emoji de anjinho
// S = pombinha branca
// J = ogro cabeludo
// K = emoji de demônio
// L = emoji de duende vermelho

function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;
let xJogador5 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#7DE1F0");
  } else {
    background("rgb(252,46,46)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("😇", xJogador1, 50);
  text("😈", xJogador2, 300);
  text("👺", xJogador3, 380);
  text("👹", xJogador4, 215);
  text("🕊️", xJogador5, 130);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    fill('yellow');
    text("O anjinho venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    fill('red');
    text("O satanás venceu!", 50, 200);
    noLoop();
 }
  if (xJogador3 > 350) {
    text("O mal venceu!", 50, 200);
    noLoop();
 }
  if (xJogador4 > 350) {
    text("O mal venceu!", 50, 200);
    noLoop();
 }
  if (xJogador5 > 350) {
    fill('yellow');
    text("A pomba venceu!", 50, 200);
    noLoop();
  }
}

// teclas do jogo na primeira linha de código

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "k") {
    xJogador2 += random(20);
 }
  if (key == "l") {
    xJogador3 += random(20);
 }
  if (key == "j") {
    xJogador4 += random(20);
 }
  if (key == "s") {
    xJogador5 += random(20);
  }
}
