// Idealized Self-Portrait

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background art
  background(150, 230, 250); // blue
  fill(255, 244, 89); // yellow
  triangle(0, 0, 0, 400, 400, 400); // yellow background triangle
  
  // neck
  stroke(0);
  strokeWeight(1);
  fill(247, 223, 151); // skin
  rect(176.5, 340, 53, 2000); // neck
  
  // chin shadow
  fill(224, 201, 105); // darker skin color
  noStroke();
  triangle(174.5, 342, 202.5, 372, 230.5, 342); // chin shadow
  stroke(0);
  strokeWeight(1);
  
  // face shape
  fill(247, 223, 151); // skin
  quad(136, 230, 172.5, 340, 232.5, 340, 260, 230); // face
  triangle(172.8, 340, 202.5, 360, 232, 340); // chin
  stroke(247, 223, 151); // skin color
  strokeWeight(1.5);
  line(174, 340, 231, 340); // line dissolving chin and face
  
  // eyebrows
  stroke(102, 71, 14);
  strokeWeight(3);
  line(170, 262, 181, 258); // left eyebrow up
  line(200, 262, 180, 258); // left eyebrow down
  line(237, 262, 230, 258); // right eyebrow up
  line(210, 262, 230, 258); // right eyebrow down

  // nose
  stroke(0);
  strokeWeight(1);
  line(202.5, 290, 202, 307.5); // nose vertical
  line(202, 307.5, 198, 307.5); // nose horizontal

  // smile
  fill(255); // white
  quad(182, 320, 220, 321, 215, 325, 190, 327); // smile

  // eyes
  stroke(0);
  strokeWeight(1);
  fill(255); // white
  quad(170, 270, 195, 271, 200, 278, 175, 277); // left eye
  quad(237, 270, 212, 271, 208, 278, 232, 277); // right eye
  fill(201, 4, 4); // red
  arc(185.5, 271, 8, 8, 0, PI); // left eyeball
  arc(221.5, 271, 8, 8, 0, PI); // right eyeball
  fill(255); // white
  arc(185.5, 271, 4, 4, 0, PI); // left pupil
  arc(221.5, 271, 4, 4, 0, PI); // right pupil
  
  // hair
  fill(156, 103, 12); // brown hair color
  noStroke();
  quad(205.5, 230, 140, 215, 130, 250, 140, 300); // left hair
  quad(140.5, 215, 225, 190, 290, 250, 205.5, 250); // right hair
}
