https://editor.p5js.org/suedfood/sketches/Y8HV8paEX

function setup() {
  createCanvas(400, 400); // creates 400 x 400 canvas
  spaceSat = new Satellite(150); // creates satellite; the argument inside the brackets is directly proportional to orbital radius
}

function draw() {
  background(0, 0, 0, 30); // black

  // planet
  fill(250, 70, 70); // red
  ellipse(200, 200, 150, 150); // planet body
  fill(220); // grey
  noStroke(); // removing black outline
  ellipse(200, 200, 250, 10); // planet ring

  // stars
  fill(random(200, 255)); // white/grey stars
  ellipse(280, 40, random(3, 8), random(3, 8)); // star
  ellipse(100, 300, random(3, 8), random(3, 8)); // star
  ellipse(50, 100, random(3, 8), random(3, 8)); // star
  ellipse(350, 340, random(3, 8), random(3, 8)); // star

  // satellite drawing
  spaceSat.drawSatellite();
}

// class construction
class Satellite {
  constructor(orbitRadius) {
    this.x = orbitRadius; 
  }
  // function
  drawSatellite() {
    push(); // marks axis translation beginning
    translate(200, 200); // 200,200 now 0,0 on axis
    fill(100, 200, 250); // blue
    rotate(frameCount / 25); // rotation angle
    rect(this.x, 0, 20, 20, 50);
    pop() // resets the translated axis
  }
}
