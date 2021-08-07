function preload(){
  snow1Image = loadImage("snow1.jpg")
  snow3Image = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  character = createSprite(200, 100)
  character.addImage(snow3Image)
}

function draw() {
  background(snow1Image);  
  drawSprites();
}