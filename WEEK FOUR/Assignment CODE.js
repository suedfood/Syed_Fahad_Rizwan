https://editor.p5js.org/suedfood/full/1zpy07maG

https://editor.p5js.org/suedfood/sketches/1zpy07maG

let font;
let points;
let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let textSize = 100;

// loads font
function preload() {
  font = loadFont("assets/Roboto.ttf");
}

// creates 4000 X 2000 canvas
function setup() {
  createCanvas(4000, 2000);
}

// prints random 4 letter words
function draw() {
  let textString =
    letters[int(random(0, 25))] +
    letters[int(random(0, 25))] +
    letters[int(random(0, 25))] +
    letters[int(random(0, 25))];

  // gets all the points of the word and forms rectangles
  points = font.textToPoints(textString, 0, 0, textSize, {});
  angleMode(DEGREES);
  background(0, 0, 0, 20); // not completely opaque black background
  stroke(random(0, 255), random(0, 255), random(0, 255)); // random color strokes
  noFill(); // does not fill the below rectangles
  push(); // transforms canvas
  translate(random(0, 800), random(0, 800)); // translation to limit words to corner
  rotate(frameCount * 10); // constantly rotating words
  for (let i = 0; i < points.length; i += 1) {
    rect(points[i].x, points[i].y, 10 * sin(frameCount)); // each point forms a rectangle
  }
  pop(); // resets canvas

  // largest text bubble
  push();
  noFill();
  stroke(255);
  strokeWeight(10);
  ellipse(0, 0, 3000, 2500);
  pop();

  // three smaller thought bubbles
  push(); // transforms canvas
  noFill(); // no fill
  stroke(255); // white
  strokeWeight(10); // thickens stroke
  ellipse(1500, 700, 300, 200); // largest
  ellipse(1800, 750, 200, 130); // smaller
  ellipse(2000, 800, 100, 60); // smallest
  pop(); // resets canvas

  // white eye parts
  push(); // transforms canvas
  fill(255); // white
  ellipse(2500, 1000, 700, 700); // left eye
  ellipse(3400, 1000, 700, 700); // right eye
  pop(); // resets canvas

  // pupil radius variable declaratiom
  let r = 50;

  // left eye
  push(); // transforms canvas
  translate(2500, 1000); // translates x,y origin
  noStroke(); // no outline
  fill(0); // black
  ellipse(0, 0, r, r); // black pupil
  pop(); // resets canvas

  // left eye
  push(); // transforms canvas
  translate(3400, 1000); // translates x,y origin
  noStroke(); // no outline
  fill(0); // black
  ellipse(0, 0, r, r); // black pupil
  pop(); // resets canvas
}
