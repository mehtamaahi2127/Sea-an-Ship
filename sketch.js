
function preload(){
sea = loadImage("sea.png")
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){

  createCanvas(400,400);
  seaSprite = createSprite(50,100,600,200)
  seaSprite.addImage(sea)
  seaSprite.scale = 0.5
  seaSprite.velocityX = -1
  shipSprite = createSprite(50,180,50,50)
 shipSprite.addAnimation("1",ship)
 shipSprite.scale = 0.1 
}

function draw() {
  background("blue");
 drawSprites()
 if(seaSprite.x<0){
   seaSprite.x = seaSprite.width/6}
 }