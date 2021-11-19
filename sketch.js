



function preload(){
  //load your images here 
  playgroundImage=loadImage("background0.png");
  bowImage=loadImage("bow0.png");
  arrowImage=loadImage("arrow0.png"); 
  blueballoonImage=loadImage("blue_balloon0.png");
  greenballoonImage=loadImage("green_balloon0.png");
  pinkballoonImage=loadImage("pink_balloon0.png");
  redballoonImage=loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(400,400);
  background(220); 
  //add code here
  playground=createSprite(0,0,20,20);
  playground.addImage(playgroundImage);
  playground.x=playground.width/2;
  playground.velocityX=-5;
  playground.scale=2;

  shooter=createSprite(370,mouseY,20,20);
  shooter.addImage(bowImage);
  
  


}

function draw() {

  //add code here
  if(playground.x<0)
  playground.x=playground.width/2
  shooter.y=mouseY;
  
  if(keyDown("space")){
  arrow=createSprite(370,200);
  arrow.addImage(arrowImage);
  arrow.y=shooter.y;
  arrow.velocityX=-5;
  arrow.scale=0.3;
  }
  
  for(i=-15;i<400;i=i+75){
  greenballoon=createSprite(30,i,20,20);
  greenballoon.addImage(greenballoonImage);
  greenballoon.scale=0.1;
  
  redballoon=createSprite(80,i,20,20);
  redballoon.addImage(redballoonImage);
  redballoon.scale=0.1;
  
  blueballoon=createSprite(130,i,20,20);
  blueballoon.addImage(blueballoonImage);
  blueballoon.scale=0.1;
  
  pinkballoon=createSprite(180,i,20,20);
  pinkballoon.addImage(pinkballoonImage);
  
   }
  
  drawSprites();  
}