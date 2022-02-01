https://editor.p5js.org/suedfood/sketches/7wVc5HsXQ

// Eyeball Movement Practice

// Upon running the code on the terminal, a face will be seen. You can control eye-movement via the mouse cursor.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 250, 250); // light blue

  // eyes
  stroke(0);
  strokeWeight(2);
  fill(255, 100, 100); // red
  ellipse(125, 100, 100, 100); // left eye
  ellipse(275, 100, 100, 100); // right eye
  fill(200, 255, 200); // green
  ellipse(125 + mouseX / 40, 100 + mouseY / 40, 50, 50); // left inner eye
  ellipse(275 + mouseX / 40, 100 + mouseY / 40, 50, 50); // right inner eye
  fill(255); // white
  ellipse(125 + mouseX / 40, 100 + mouseY / 40, 10, 10); // left pupil
  ellipse(275 + mouseX / 40, 100 + mouseY / 40, 10, 10); // right pupil

  // nose
  line(200, 150, 198, 220); // nose vertical
  line(198, 220, 180, 220); // nose horizontal

  // mouth
  ellipse(190, 280, 50, 20); // mouth
}
