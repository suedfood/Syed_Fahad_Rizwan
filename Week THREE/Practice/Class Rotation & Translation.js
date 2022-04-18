https://editor.p5js.org/suedfood/sketches/zdeixR7SW

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); // rect(x,y,50,50) x y is the center point
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push();
  // move the origin to 200,200 via translate (x,y)
  translate(200, 200);
  fill(50, 250, 50);
  rotate(frameCount);
  rect(0, 0, 50, 100);
  pop();

  // beginning with push and ending with pop restores the original canvas

  rect(100, 100, 30, 40);
}
