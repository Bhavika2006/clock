


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  var h = hour();
  var s = second();
  var m = minute();
  
  angleMode(DEGREES)
  scAngle = map(s,0,60,0,360)
  mnAngle = map(m,0,60,0,360)
  hrAngle = map(h%12,0,12,0,360)
  
  //drawing second hand 
  push();
  translate(400,200)
  rotate(scAngle)
  stroke('red')
  strokeWeight(7)
  line(0,0,100,0)
  
arc(0, 0, 90, 300, 0, scAngle);
  
  pop();
  // drawing hour hand 
  push();
  translate(400,200)
  rotate(mnAngle)
  stroke('blue')
  strokeWeight(7)
  line(0,0,50,0)
  
  arc(0, 0, 280, 280, 0, mnAngle);
  pop();
  //drawing minute hand 
  push();
  translate(400,200)
  rotate(hrAngle)
  stroke('green')
  strokeWeight(7)
  line(0,0,80,0)
  
  arc(0, 0, 200, 200, 0, hrAngle);
  pop();

  drawSprites();
}