const int ledPin = 3; // led is connected to pin 3
const int potPin = A0; // potentiometer connected to A0
int potVal;

void setup() {
  // initializes ledPin as an output
  pinMode(ledPin, OUTPUT);
  // initializes potPin as an output
  pinMode(potPin, INPUT);
  // initializes serial communication at baud rate
  Serial.begin(9600);
}

void loop() {
  // variable to control brightness
  int ledState;
  potVal = analogRead(A0);
  Serial.println(potVal);
  // checks if information received from p5js
  if (Serial.available() > 0) {
    // stores the most recent byte between 0-255
    ledState = Serial.read();
    // changes the brightness of led depending on data received
    digitalWrite(ledPin,ledState);
  }
}
