const int potPin = A0;
int potVal = 0;

void setup() {
  // initializes serial communication at baud rate
  Serial.begin(9600);
}

void loop() {
  potVal = analogRead(potPin);
  Serial.println(potVal);
}
