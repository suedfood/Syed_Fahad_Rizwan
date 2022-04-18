https://editor.p5js.org/suedfood/sketches/PUGtUjww8

// I condensed and experimented with the spiral code on p5js official website

let angle = 2;
let scalar = 0;
let speed = 0.5;

function setup() { 
  createCanvas(800, 800);
  background (0);
} 

function draw() { 
  noStroke()
  let x = width/2 + sin(angle) * scalar;
  let y = height/2 + cos(angle) * scalar;
  fill(random(100, 200), random(100, 200), random(100, 200));
  noStroke();
  ellipse(x, y, 3, 3);
  angle = angle + speed;
  scalar = scalar + speed;
}
