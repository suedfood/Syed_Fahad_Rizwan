// global pin declaration
const int forcePin = A0;
const int forcePin2 = A2;
const int switchPin = 12;
const int echoPin = 2;
const int trigPin = 3;

// global variable declaration
int forVal;
int forVal2;
int switchVal;
int switchValX;
int distance;
int cleanDistance = 0;
long duration;

// initializing inputs, outputs, and serial communication
void setup() {
  Serial.begin(9600);
  pinMode(switchPin, INPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  // ultrasonic sensor configuration
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);


  // storing inputs in variables
  forVal = analogRead(A0);
  forVal2 = analogRead(A2);
  switchVal = digitalRead(12);
  switchValX = switchVal + 1;
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;
  cleanDistance = (cleanDistance * 0.9) + ( 0.1 * distance);
  
  // printing inputs on the serial monitor
  Serial.print(forVal);
  Serial.print(",");
  Serial.print(forVal2);
  Serial.print(",");
  Serial.print(switchValX);
  Serial.print(",");
  Serial.println(cleanDistance);
  delay(10);
}
