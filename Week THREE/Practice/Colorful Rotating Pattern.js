https://editor.p5js.org/suedfood/sketches/IpJhQXkGi

function setup() {
  createCanvas(400, 400);
  background(220);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  rotateye(0, 0, random(0, 400), 5);
}

function rotateye(centerX, centerY, radius, thickness) {
  push();
  translate(200, 200);
  fill(random(0, 100), random(0, 255), random(0, 255));
  rotate(200 * cos(frameCount));
  ellipse(centerX, centerY, radius, thickness);
  fill(255);
  noStroke();
  ellipse(0, 0, 10);
  pop();
}
