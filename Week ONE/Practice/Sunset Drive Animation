https://editor.p5js.org/suedfood/sketches/5t-G1HHsx

// Sunset Drive Animation

// A red car driving at sunset along a beautiful beach. You'll see a flying airplane too. On moving the mouse cursor, the sun's mouth size will change too.

let xPos = 0;
let pPos = 0.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // sunset sky color
  background(200, 250, 250); // light blue
  noStroke(); // sky and sun
  fill(99, 135, 255); // dark blue
  ellipse(200, 200, 600, 600); // sky
  fill(173, 192, 255); // light purple
  ellipse(200, 200, 400, 400); // sky
  fill(255, 207, 140); // light orange
  ellipse(200, 200, 200, 200); // sky
  
  // sun
  fill(247, 162, 42); // sun color
  ellipse(200, 170, 80, 80); // sun
  fill(255); // white color
  stroke(0); // black color
  ellipse(185, 160, 15, 25); // left eye
  ellipse(215, 160, 15, 25); // right eye
  fill(41, 140, 69); // sun eyeballs
  ellipse(185, 158, 7, 10); // left eyeball
  ellipse(215, 158, 7, 10); // right eyeball
  fill(255); // sun pupils
  ellipse(185, 158, 4, 5); // left pupil
  ellipse(215, 158, 4, 5); // right pupil
  fill(255, 200, 200); // mouth sun color
  ellipse(200, 185, 5 + mouseX / 30, 5 + mouseY / 30); // mouth sun

  // sea 
  fill(76, 174, 194); // sea color
  rect(0, 200, 400, 200); // sea
  
  // sun rays reflection
  stroke(255, 236, 61); // yellow
  strokeWeight(5);
  line(225, 203, 300, 250); // rightmost sun ray
  line(210, 203, 240, 250); // right sun ray
  line(200, 203, 200, 250); // center sun ray
  line(190, 203, 150, 250); // left sun ray
  line(175, 203, 100, 250); // leftmost sun ray
  
  // beach
  stroke(0); // black
  strokeWeight(1);
  fill(242, 214, 138); // sand color
  rect(0, 340, 400, 80); // sand
  
  // road
  fill(110, 108, 104); // grey
  rect(0, 380, 400, 20); // road
  fill(255, 225, 0); // yellow
  rect(20 - xPos, 387, 50, 5); // yellow tile
  rect(120 - xPos, 387, 50, 5); // yellow tile
  rect(220 - xPos, 387, 50, 5); // yellow tile
  rect(320 - xPos, 387, 50, 5); // yellow tile
  rect(420 - xPos, 387, 50, 5); // yellow tile
  rect(520 - xPos, 387, 50, 5); // yellow tile
  rect(620 - xPos, 387, 50, 5); // yellow tile
  rect(720 - xPos, 387, 50, 5); // yellow tile
  rect(820 - xPos, 387, 50, 5); // yellow tile
  rect(920 - xPos, 387, 50, 5); // yellow tile
  rect(1020 - xPos, 387, 50, 5); // yellow tile
  rect(1120 - xPos, 387, 50, 5); // yellow tile
  rect(1220 - xPos, 387, 50, 5); // yellow tile
  rect(1320 - xPos, 387, 50, 5); // yellow tile
  rect(1420 - xPos, 387, 50, 5); // yellow tile
  rect(1520 - xPos, 387, 50, 5); // yellow tile
  
  // car
  fill(224, 56, 0); // red
  rect(40 + xPos, 350, 80, 20); // car bottom part
  rect(60 + xPos, 330, 40, 20); // car top part
  
  // car wheels
  fill(0); // black
  arc(65 + xPos, 370, 18, 18, 0, PI * 2); // left wheel
  arc(95 + xPos, 370, 18, 18, 0, PI * 2); // right wheel
  fill(255); // white
  arc(65 + xPos, 370, 12, 12, 0 - xPos, PI * 1.5 - xPos); // left rim
  arc(95 + xPos, 370, 12, 12, 0 - xPos, PI * 1.5 - xPos); // right rim
  
  // airplane
  fill(255, 207, 140);
  noStroke(); // plane outline
  fill(180); // plane color grey
  rect(300 + 500 - pPos, 50, 50, 20); // plane body
  arc(300 + 500 - pPos, 60, 50, 20, 0, PI * 2); // plane front
  triangle(350 + 500 - pPos, 50, 335 + 500 - pPos, 50, 350 + 500 - pPos, 30); // plane back
  triangle(310 + 500 - pPos, 70, 320 + 500 - pPos, 70, 325 + 500 - pPos, 90); // plane lower fin
  triangle(310 + 500 - pPos, 50, 320 + 500 - pPos, 50, 325 + 500 - pPos, 30); // plane upper fin
  
  // variable manipulation per loop
  xPos = xPos + 0.75;
  pPos = pPos + 2;
}
