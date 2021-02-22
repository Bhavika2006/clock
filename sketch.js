var h = hour();
var s = second();
var m = minute();



function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES)
  scAngle = map(o,60,angle,0,360)
  //drawing second hand 
  push();
  translate(this.body.position.x,this.body.position.y)
  rotate(scAngle)
  stroke('red')
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  // drawing hour hand 
  push();
  translate(this.body.position.x,this.body.position.y)
  rotate(scAngle)
  stroke('blue')
  strokeWeight(7)
  line(0,0,50,0)
  pop();
  //drawing minute hand 
  push();
  translate(this.body.position.x,this.body.position.y)
  rotate(scAngle)
  stroke('green')
  strokeWeight(7)
  line(0,0,80,0)
  pop();

  drawSprites();
}