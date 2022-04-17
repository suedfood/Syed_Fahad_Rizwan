// Declare a "SerialPort" object
var serial;
var latestData = 0; // you'll use this to write incoming data to the canvas
let ypos = 0;

function setup() {
  createCanvas(400, 400);

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();
  //copy this from serial control app
  serial.open("/dev/tty.usbmodem143101");
  serial.on('data', gotData);
}


// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine();
  if (currentString.length > 0) {
    latestData = Number(currentString);
    console.log(latestData);
  }
}

function draw() {
  background(255, 255, 255);
  fill(0, 0, 0);
  //var mappedData = int(map(latestData, 900, 950, 0, height));
  var mappedData = int(map(latestData, 200, 900, 0, height));
  //var data = int(latestData-850);
  //console.log(latestData, mappedData);
  //ypos = lerp(ypos, mappedData, 0.03);
 
  ellipse(100, mappedData, 50, 50);
  //text(data, 10, 10);

}

function mouseDragged() {
  var output = int(map(mouseX, 0, width, 0, 180));
  serial.write(output);
  console.log(output);
}
