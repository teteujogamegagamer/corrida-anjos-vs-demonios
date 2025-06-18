// TECLAS DO JOGO:
// A, S, J, K, L

function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0, 0];
let yJogador = [85, 145, 205, 265, 325];
let jogador = ["😇", "🕊️", "👹", "😈", "👺"];
let teclas = ["a", "s", "j", "k", "l"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D31616");
  } else {
    background("#6A8DE5");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("rgb(5,19,92)");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      fill('yellow')
      text(jogador[i] + "VENCEU!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}

