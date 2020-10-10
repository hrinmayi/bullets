var wall;
var speed,weight;
var thickness,bullet;

function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet=createSprite(50,200,70,30);
 bullet.velocityX=speed;
 wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall))
{bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness
    *thickness);
if(damage>10)
{
bullet.shapeColor=color(255,0,0);
}
if(damage<10);
{
  bullet.shapeColor=color(230,230,0);
}
}
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;

}