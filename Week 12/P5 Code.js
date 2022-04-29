// variable for the serial object
let serial;
let dataString;

// let splitString;
let yPos = 200;
let width = 1000;
let height = 1000;
let brightness = 0;
let GC1;
let GC2;
let splitString = [0, 0, 0];
let air = 0.0;
let speed;

function preload() {
  pixelNight = loadImage("Assets/pixNight.jpeg");
  pixelDay = loadImage("Assets/pixDay.png");
  pixelBal = loadImage("Assets/pixBal.png");
}

function setup() {
  // creating canvas
  createCanvas(width, height);
  imageMode(CENTER);

  // serial constructor
  serial = new p5.SerialPort();

  serial.list();

  // serial port opening
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
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  dataString = currentString;
  splitString = split(dataString, ",");
}

// gradient formation for fun
function drawGradient(c2, c1) {
  noFill();
  for (let y = 0; y < height; y++) {
    let interp = map(y, 0, height, 0, 1);
    let c = lerpColor(c2, c1, interp);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  // defining colors
  xposl = map(splitString[0], 0, 550, 0, width);
  xposr = map(splitString[3], 0, 550, 0, width);

  // gradient formation - not calling for now
  GC1 = color(10, splitString[0], 255);
  GC2 = color(splitString[0], 250, 100);
  drawGradient(GC1, GC2);
  // background change via switch
  if (splitString[2] == 1) {
    image(pixelDay, width / 2, height / 2, width, height);
  } else if (splitString[2] == 2) {
    image(pixelNight, width / 2, height / 2, width, height);
  }
  
  // noise and balloon initialization 
  let speed = random(-20, 20);
  air = air + speed;
  let n = noise(air) * width;
  fill(0);
  image(pixelBal, width / 2 + xposr - xposl + air, height / 2, 350, 350);
}
