https://editor.p5js.org/suedfood/sketches/wuX3Qhqh1

// Rookie Snowfall Animation

// Snowfall happening on a winter grassland.

// variable declaration
let xCoordinate = 0;
let snow = 0;

// canvas creation
function setup() {
  createCanvas(400, 400);
}

function draw() {
  // night background
  background(50, 50, 255);

  // clouds
  noStroke();
  fill(230, 232, 223);
  ellipse(50 + xCoordinate, 30, 200, 100);
  ellipse(100 + xCoordinate, 20, 200, 100);
  ellipse(200 + xCoordinate, 40, 100, 100);
  ellipse(300 + xCoordinate, 30, 200, 100);
  ellipse(400 + xCoordinate, 30, 200, 100);
  ellipse(-500 + xCoordinate, 30, 200, 100);
  ellipse(-400 + xCoordinate, 20, 200, 100);
  ellipse(-300 + xCoordinate, 30, 100, 100);
  ellipse(-200 + xCoordinate, 30, 200, 100);
  ellipse(-100 + xCoordinate, 30, 200, 100);
  ellipse(900 - xCoordinate, 30, 200, 100);
  ellipse(800 - xCoordinate, 20, 200, 100);
  ellipse(700 - xCoordinate, 30, 100, 100);
  ellipse(600 - xCoordinate, 30, 200, 100);
  ellipse(500 - xCoordinate, 30, 200, 100);

  // grass
  fill(49, 115, 62);
  rect(0, 380, 400, 20);

  // snow blanket
  fill(255);
  rect(0, 370, 400, 10);

  // snowfall
  stroke(255);
  strokeWeight(5);
  fill(255);
  line(50, 45 + xCoordinate, 50, 45 + xCoordinate);
  line(100, 45 + xCoordinate, 100, 45 + xCoordinate);
  line(170, 45 + xCoordinate, 170, 45 + xCoordinate);
  line(250, 45 + xCoordinate, 250, 45 + xCoordinate);
  line(370, 45 + xCoordinate, 370, 45 + xCoordinate);
  line(330, 45 + xCoordinate, 330, 45 + xCoordinate);
  line(50, 20 + xCoordinate, 50, 20 + xCoordinate);
  line(120, 20 + xCoordinate, 120, 20 + xCoordinate);
  line(150, 20 + xCoordinate, 150, 20 + xCoordinate);
  line(220, 20 + xCoordinate, 220, 20 + xCoordinate);
  line(390, 20 + xCoordinate, 390, 20 + xCoordinate);
  line(310, -20 + xCoordinate, 310, -20 + xCoordinate);
  line(170, -20 + xCoordinate, 170, -20 + xCoordinate);
  line(130, -20 + xCoordinate, 130, -20 + xCoordinate);
  line(200, -20 + xCoordinate, 200, -20 + xCoordinate);
  line(250, -20 + xCoordinate, 250, -20 + xCoordinate);
  line(350, -20 + xCoordinate, 350, -20 + xCoordinate);
  line(380, -20 + xCoordinate, 380, -20 + xCoordinate);
  line(80, -20 + xCoordinate, 80, -20 + xCoordinate);
  line(310, -60 + xCoordinate, 310, -60 + xCoordinate);
  line(160, -60 + xCoordinate, 160, -60 + xCoordinate);
  line(140, -60 + xCoordinate, 140, -60 + xCoordinate);
  line(210, -60 + xCoordinate, 210, -60 + xCoordinate);
  line(260, -60 + xCoordinate, 260, -60 + xCoordinate);
  line(320, -60 + xCoordinate, 320, -60 + xCoordinate);
  line(375, -60 + xCoordinate, 375, -60 + xCoordinate);
  line(90, -60 + xCoordinate, 90, -60 + xCoordinate);
  line(315, -120 + xCoordinate, 315, -120 + xCoordinate);
  line(165, -120 + xCoordinate, 165, -120 + xCoordinate);
  line(145, -120 + xCoordinate, 145, -120 + xCoordinate);
  line(215, -120 + xCoordinate, 215, -120 + xCoordinate);
  line(265, -120 + xCoordinate, 265, -120 + xCoordinate);
  line(325, -120 + xCoordinate, 325, -120 + xCoordinate);
  line(380, -120 + xCoordinate, 380, -120 + xCoordinate);
  line(40, -120 + xCoordinate, 40, -120 + xCoordinate);
  line(320, -180 + xCoordinate, 315, -180 + xCoordinate);
  line(165, -180 + xCoordinate, 165, -180 + xCoordinate);
  line(142, -180 + xCoordinate, 142, -180 + xCoordinate);
  line(220, -180 + xCoordinate, 220, -180 + xCoordinate);
  line(265, -180 + xCoordinate, 265, -180 + xCoordinate);
  line(330, -180 + xCoordinate, 330, -180 + xCoordinate);
  line(340, -180 + xCoordinate, 340, -180 + xCoordinate);
  line(70, -180 + xCoordinate, 70, -180 + xCoordinate);

  // moon
  fill(240, 237, 173);
  noStroke();
  arc(350, 150, 50, 50, 0, PI * 2);

  // variable manipulation
  xCoordinate += 0.2;
  snow += 5;
}
