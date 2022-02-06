https://editor.p5js.org/suedfood/sketches/ygT-RDg56

function setup() {
  createCanvas(400, 400);
  print("3 Click Challenge");
  print("> Rules");
  print("- Find the hidden green light button");
  print("- You have a maximum of 3 clicks");
  print("- Red light means incorrect click");
  print("- Goodluck");
}

function draw() {
  fill(240);
  noStroke();
  rect(0, 0, 400, 400);
  if (
    mouseIsPressed &&
    width - 70 < mouseX &&
    mouseX < width - 20 &&
    height - 380 < mouseY &&
    mouseY < height - 330
  ) {
    fill(50, 250, 50);
    rect(0, 0, 400, 400);
  } else if (mouseIsPressed) {
    fill(250, 50, 50);
    rect(0, 0, 400, 400);
  } else {
    fill(240);
    rect(0, 0, 400, 400);
  }
}
