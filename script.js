const sprites = new Image();
sprites.src = './assets/sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const background = new Image();
background.src = './assets/backgroundSpace_01.1.png';

let bgX = 0;
let bgSpeed = 1;

const titleText ={
  writing: 'PREPARE-SE PARA A BATALHA ESPACIAL!',
  color: '#f0f0f0',
  font: '37px Orbitron',
  positionY: 80,
  
}
 
// Objetos de Instrução Separados
const movementInstructionText = {
  writing: 'Use as setas para mover a nave,',
  color: '#f0f0f0',
  font: '28x Orbitron',
  positionY: 320,
};

const shootingAndStartInstructionText = {
  writing: 'Aperte espaço para atirar e, enter para começar',
  color: '#f0f0f0',
  font: '28px Orbitron',
  positionY: 350,
};

function update (){
  bgX -= bgSpeed;
  if (bgX <= -canvas.width) {
    bgX = 0;
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(background, bgX, 0, canvas.width, canvas.height);
  context.drawImage(background, bgX + canvas.width, 0, canvas.width, canvas.height);

  drawText(titleText)
  drawText(movementInstructionText);
  drawText(shootingAndStartInstructionText);
}

const spaceship = {
  spriteX: 150,   //Where spaceship position in X starts in sprite
  spriteY: 200,   //Where spaceship position in Y starts in sprite
  spriteWidth: 450,    //Spaceship width in sprite
  spriteHeight: 215,   //spaceship height in sprite
  x: 15,    //Spaceship's initial position in X
  y: 320,  //Spaceship's initial position in Y
  characterWidth: 110,
  characterHeight: 93,
  drawCharacter () {
    context.drawImage(
      sprites,
      spaceship.spriteX, spaceship.spriteY,
      spaceship.spriteWidth, spaceship.spriteHeight,
      spaceship.x, spaceship.y,
      spaceship.characterWidth, spaceship.characterHeight,
    );

  }
}

function drawText (text) {
  
  context.fillStyle = text.color;
  context.font = text.font;

  function calculateTextPosition (text){
    const textMetrics = context.measureText(text.writing);
    const textWidth = textMetrics.width;
    const textX = (canvas.width - textWidth)/2;
    return textX;
  }

  context.fillText(text.writing, calculateTextPosition(text), text.positionY);
}

function loop(){
  update();
  draw();
  spaceship.drawCharacter();
  requestAnimationFrame(loop);

}

background.onload = function(){
  loop();
}
