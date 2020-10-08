var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1800,400);
  
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(200, 100, 100, 30);
  
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness=random(22,83);

  wall = createSprite(1500, 200, thickness, height);
  wall.shapeColor = "gray";

}

function draw() {
  background("black");
  
  edges = createEdgeSprites();

  if (hasCollided(bullet, wall)){

    bullet.velocityX = 0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if (damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
    
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}