const sprites = new Image();
sprites.src = './assets/sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const background = new Image();
background.src = './assets/backgroundSpace_01.1.png';

let bgX = 0;
let bgSpeed = 1;

const titleText = 'Prepare-se para a batalha espacial!';

const instructionText = 'Utilize as setas para movimentar sua nave, aperte espaço para atirar e enter para começar';

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
  
  context.fillStyle = "#f0f0f0";
  context.font = '47px Orbitron'

  const textMetrics = context.measureText(text);
  const textWidth = textMetrics.width;

  const textX = (canvas.width - textWidth)/2;

  const textY = 80

  context.fillText(text, textX, textY);
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