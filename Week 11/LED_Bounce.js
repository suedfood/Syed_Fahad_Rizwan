// variable for the serial object
let serial;
let latestData = 0;
// variable for brightness
let bright = 0;
// variables for ball bouncing
let ypos = 0;
let yspeed = 0;
let yacc = 0.9;
let size = 80;
// canvas dimensions
let width = 1023;
let height = 600;

// canvas creation and serial communication setup
function setup() {
  createCanvas(width, height);

  serial = new p5.SerialPort();

  serial.list();
  serial.open("/dev/tty.usbmodem1101");

  serial.on("connected", serverConnected);

  serial.on("list", gotList);

  serial.on("data", gotData);

  serial.on("error", gotError);

  serial.on("open", gotOpen);

  serial.on("close", gotClose);
}

function serverConnected() {
  print("Connected to Server");
}

function gotList(thelist) {
  print("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose() {
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

// receiving data from arduino
function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  latestData = currentString;
}

// ellipse creation and wind command
function draw() {
  background(255);
  fill(0);
  ellipse(latestData, ypos, size);
  yspeed += yacc; // speed changes due to acceleration
  ypos += yspeed; // position changes due to speed
  if (ypos >= height - size / 2) {
    ypos = height - size / 2;
    yspeed = -yspeed;
  }
  // conditional to light LED up
  if (ypos == height - size / 2) {
    bright = 255;
  } else if (ypos < height - size / 2) {
    bright = 0;
  }
  // sends LED brightness to arduino
  serial.write(bright);
}
