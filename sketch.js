var movingRect, fixedRect

function setup() {
  createCanvas(800,800);
 movingRect=  createSprite(400, 100, 50, 50);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 fixedRect = createSprite(400,800,50,100);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;

movingRect.velocityY = +5;
fixedRect.velocityY = -5;

}

function draw() {
  background(70,45,67);  
//movingRect.y = World.mouseY;
//movingRect.x = World.mouseX;


  if(movingRect.x - fixedRect.x < fixedRect.width/2+ movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2 ){
     movingRect.velocityX = movingRect.velocityX * (-1);
     fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if(fixedRect.y- movingRect.y< fixedRect.height/2+ movingRect.height/2
    && movingRect.y-fixedRect.y< fixedRect.height/2+ movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  
  drawSprites();
}