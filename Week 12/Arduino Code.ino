const int forcePin = A0;
// global constants and variables
const int potPin = A5;
const int forcePin2 = A2;
const int switchPin = 12;
int forVal;
int forVal2;
int potVal;
int mappedPot;
int switchVal;
int switchValX;

// initializing serial communication
void setup() {
  Serial.begin(9600);
  pinMode(switchPin, INPUT);
}

void loop() {
  // storing inputs in variables
  forVal = analogRead(A0);
  forVal2 = analogRead(A2);
  potVal = analogRead(A5);
  switchVal = digitalRead(12);
  mappedPot = map(potVal,0,1023,0,255);
  switchValX = switchVal + 1;

  // printing inputs on serial monitor 
  Serial.print(forVal);
  Serial.print(",");
  Serial.print(mappedPot);
  Serial.print(",");
  Serial.print(switchValX);
  Serial.print(",");
  Serial.println(forVal2);
  delay(10);
  
}
