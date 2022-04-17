// global variable declaration

// variable for the serial object
let serial; 
// variable to control brightness
let brightness = 0; 
// variables for both ends of color spectrum
let Black; 
let Red;


function setup() {
  // creating 600 X 600 canvas
  createCanvas(600, 600);
  // defining colors
  Black = color(0);
  Red = color(255, 0, 0);

  // serial constructor
  serial = new p5.SerialPort();

  // serial port opening
  serial.open('/dev/tty.usbmodem1101');

}

// grading formation to make it user-friendly
function drawGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    let interp = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, interp);
    stroke(c);
    line(0, y, width, y);
  }
}

// cursor creation to make it user-friendly
function draw() {
  drawGradient(Black, Red);
  stroke(255);
  strokeWeight(5);
  ellipse(mouseX, mouseY, 20, 20);
}

// mouseY dictates brightness
function mousePressed(){
  brightness = floor(map(mouseY, 0, 600, 0, 255));
  brightness = constrain(brightness, 0, 255);
  serial.write(brightness);
}
