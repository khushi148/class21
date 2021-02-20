var fixedRect, movingRect;
var box1,box2,box3,box4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1=createSprite(100,100,50,50);
  box2=createSprite(200,300,50,50);
  box2.velocityX=6;
  box2.shapeColor="blue"
  box3=createSprite(900,300,50,50);
  box3.velocityX=-5;
  box3.shapeColor="pink";
  box4=createSprite(400,100,50,50);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,box1)){
    movingRect.shapeColor = "blue";
  box1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  box1.shapeColor = "green";

  }
  bounceOff(box2,box3);
  drawSprites();
}


