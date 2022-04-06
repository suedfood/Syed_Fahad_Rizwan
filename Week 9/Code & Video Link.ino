// video - https://drive.google.com/file/d/1nArI0sUboojOsPNQp4hlVtyZX7GFNW7m/view?usp=sharing

// global variables and pins declaration
const int ButtonPin = 3;
const int Blue_LED = 9;
const int Red_LED = 10;
const int Green_LED = 4;
const int echo = 13;
const int trig = A0;
int duration = 0;
int distance = 0;
int ButtonValue = 0;

// pin and serial initiation
void setup() {
  pinMode(ButtonPin, INPUT);
  pinMode(Blue_LED, OUTPUT);
  pinMode(Red_LED, OUTPUT);
  pinMode(Green_LED, OUTPUT);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  Serial.begin(9600);
}

// loop function
void loop() {
  // loops trigPin on HIGH state for 1000 micro seconds before LOW
  digitalWrite(trig, HIGH);
  delayMicroseconds(1000);
  digitalWrite(trig, LOW);

  // digitally reads button input (0 or 1)
  ButtonValue = digitalRead(ButtonPin);

  // Reads echoPin, returning sound wave travel time in microseconds
  duration = pulseIn(echo, HIGH);
  
  // Calculates distance in centimeters 
  distance = (duration / 2) / 28.5;
  
  // Prints distance on serial monitor
  Serial.println(distance);

  // conditions on turning blue LED on or off with pushbutton
  if (ButtonValue != 0) {
    analogWrite(Blue_LED, 10);
  }
  else {
    analogWrite(Blue_LED, 0);
  }

  // conditions on turning red and green LED on or off via distance
  if (distance <= 10) {
    digitalWrite(Red_LED, HIGH);
    digitalWrite(Green_LED, LOW);
  }
  else if (distance > 10 && distance < 15) {
    analogWrite(Red_LED, 1);
    digitalWrite(Green_LED, LOW);
  }
  else if (distance >= 15) {
    digitalWrite(Green_LED, HIGH);
    digitalWrite(Red_LED, LOW);
  }
}
