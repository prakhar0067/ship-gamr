var sea = createSprite (200,200)


function preload(){

}

function setup(){
  createCanvas(400,400);
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation()
  
}

function draw() {
  spriteName.addImage(seaImg);
  drawSprites();
  background("blue");


 
}