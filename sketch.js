var mr, fr
var nr, tr

function setup() {
  createCanvas(800,400);
  fr = createSprite(200,200,50,50);
  mr = createSprite(400, 200, 50, 50);
  nr = createSprite(0,300,50,50);
  nr.velocityX = 2;
  tr = createSprite(800,300,50,50);
  tr.velocityX = -2;
  nr.debug = true;
  tr.debug = true;

}

function draw() {
  background("black");  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x - fr.x < mr.width/2 + fr.width/2
    &&  fr.x - mr.x < mr.width/2 + fr.width/2
    && mr.y - fr.y < mr.height/2 + fr.height/2
    && fr.y - mr.y < mr.height/2 + fr.height/2)
     {
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  }else{
    fr.shapeColor = "green";
    mr.shapeColor = "green";
  }
  
  if(nr.x - tr.x < nr.width/2 + tr.width/2
    &&  tr.x - nr.x < nr.width/2 + tr.width/2) {
      nr.velocityX = nr.velocityX * (-1);
      tr.velocityX = tr.velocityX * (-1);
    }

  drawSprites();
}