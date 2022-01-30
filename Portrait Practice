// Portrait Practice

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // background art
  background(255, 239, 117); // yellow
  noStroke();
  fill(136, 252, 252); // blue
  triangle(0, 0, 0, 400, 400, 400);

  // neck
  stroke(0);
  strokeWeight(1);
  fill(237, 207, 140); // skin color
  rect(150, 300, 70, 100); // neck

  // chin shadow
  noStroke();
  fill(207, 180, 120);
  arc(185, 335, 70, 50, 0, 180);

  //face
  stroke(0);
  strokeWeight(1);
  fill(237, 207, 140);
  ellipse(190, 250, 140, 200); // face

  // eyes
  fill(255);
  ellipse(165, 220, 40, 10); // left eye
  ellipse(220, 220, 40, 10); // right eye
  fill(181, 0, 15); // red
  ellipse(165, 220, 10, 9); // left eyeball
  ellipse(220, 220, 10, 9); // right eyeball
  fill(255); // white
  ellipse(165, 220, 3, 2); // left pupil
  ellipse(220, 220, 3, 2); // right pupil

  // eyebrows
  line(145, 205, 185, 206); // left eyebrow
  line(200, 206, 240, 205); // right eyebrow

  // nose
  line(195, 230, 194, 260); // nose vertical
  line(194, 260, 185, 260); // nose horizontal

  // smile
  line(170, 290, 209, 290); // mouth
  fill(222, 177, 188); // light purple
  arc(190, 290, 40, 13, 0, 180); // smile arc

  // hair
  stroke(255, 112, 139); // pink
  strokeWeight(28); // thick hair
  ellipse(160, 170, 105, 50); // left hair curve
  ellipse(210, 165, 104, 50); // right hair curve
  quad(140, 220, 163, 195, 217, 170, 145, 160); // left hair spike
  quad(120, 220, 112, 188, 170, 165, 122, 160); // left hair spike
  quad(255, 230, 225, 155, 257, 160, 261.2, 164); // right hair spike
}
