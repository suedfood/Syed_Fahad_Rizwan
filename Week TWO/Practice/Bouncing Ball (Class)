https://editor.p5js.org/suedfood/sketches/Y9A2H_wsg

let xspeed=10, yspeed=10;
let xpos=0, ypos=0;

function setup() {
  createCanvas(400, 700);
}

function draw() {
  background(220);
  ellipse(xpos, ypos,50);
  xpos = xpos + xspeed;
  ypos = ypos + yspeed;
  
  if(ypos > height || ypos < 0) { 
    yspeed = -1*yspeed; 
  } 
  else if(xpos > width || xpos<0) {
    xspeed = -1*xspeed;
  } 
}
