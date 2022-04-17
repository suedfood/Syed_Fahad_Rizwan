const int ledPin = 3; // led is connected to pin 3

void setup() {
  // initializes ledPin as an output
  pinMode(ledPin, OUTPUT);
  // initializes serial communication at baud rate
  Serial.begin(9600);
}

void loop() {
  // variable to control brightness
  int ledBrightness;
  // checks if information received from p5js
  if (Serial.available() > 0) {
    // stores the most recent byte between 0-255
    ledBrightness = Serial.read();
    // changes the brightness of led depending on data received
    analogWrite(ledPin, ledBrightness);
  }
}
