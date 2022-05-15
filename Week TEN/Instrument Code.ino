// https://drive.google.com/drive/folders/1GKb1Wppud90y6PXiey-1TB8MqW27y9ik?usp=sharing

#include"pitches.h"

//Outputs
const int buzzer = 6;
const int buzzer2 = 9;
const int switcher = 7;
const int led = 11;

//inputs
const int POT = A0;
const int FORCE = A1;
const int POT2 = A2;
#define echoPin 2 
#define trigPin 3 


// defines variables
int switcherState;
long duration; // variable for the duration of sound wave travel
int distanceNew; // variable for the new distance measurement
int distanceOld = 0; // variable for the old distance measurement
int distSpeed; // variable for speed
unsigned long previousMillis = 0; // variable for setting up the interval code
long tracker = 0; //  the tracker basically keeps track of which iteration we are in of the loop
long interval; // interval being set up by POT
int forceValue;
int potValue;
int pot2Value;
int note;

void setup() {
  // put your setup code here, to run once:
  pinMode(buzzer, OUTPUT);
  pinMode(buzzer2, OUTPUT);
  pinMode(led, OUTPUT);
  pinMode(switcher, INPUT);
  pinMode(POT, INPUT);
  pinMode(POT2, INPUT);
  pinMode(FORCE, INPUT);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  Serial.begin(9600);
}

void loop() {
  switcherState = digitalRead(switcher);

  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distanceNew = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)

  // defining values from analog reads
  potValue = analogRead(POT);
  interval = potValue;
  pot2Value = analogRead(POT2);
  duration = pot2Value;
  forceValue = analogRead(A1);

  unsigned long currentMillis = millis();

  if (switcherState == 1) {
    if (currentMillis - previousMillis >= interval) {

    // for the first iteration we play the sound using the ultrasound
    // it measures the distance and subtracts it from the previous time it mapped your hand position
      if (tracker % 4 == 0) {
         digitalWrite(led, HIGH);
        distSpeed = abs(distanceNew - distanceOld);
        distanceOld = distanceNew;

        if (distSpeed < 1) {
          note = NOTE_C7;
        } else if (distSpeed < 2) {
          note = NOTE_D7;
        } else if (distSpeed < 3) {
          note = NOTE_E7;
        } else if (distSpeed < 4) {
          note = NOTE_F7;
        } else if (distSpeed < 5) {
          note = NOTE_G7;
        } else if (distSpeed < 7) {
          note = NOTE_A7;
        } else if (distSpeed < 8) {
          note = NOTE_B7;
        } else if (distSpeed < 9) {
          note = NOTE_C8;
        } else if (distSpeed < 10) {
          note = NOTE_D8;
        }
        else {
          note = NOTE_G6;
        }
        tone(buzzer, note, duration);


      }
      if (tracker % 4 == 1) {
        // we have to do noTone here so that we can hear the next note
        // also the LED is turned off
        noTone(buzzer);
        digitalWrite(led, LOW);
      }
      if (tracker % 4 == 2) {
        // the note here is determined by pressure
        digitalWrite(led, LOW);
        if (forceValue < 100) {
          note = NOTE_C5;
        } else if (forceValue < 200) {
          note = NOTE_D5;
        } else if (forceValue < 300) {
          note = NOTE_E5;
        } else if (forceValue < 400) {
          note = NOTE_F5;
        } else if (forceValue < 500) {
          note = NOTE_G5;
        } else if (forceValue < 600) {
          note = NOTE_A5;
        } else if (forceValue < 700) {
          note = NOTE_B5;
        } else if (forceValue < 800) {
          note = NOTE_C6;
        } else if (forceValue < 900) {
          note = NOTE_D6;
        }
        else if (forceValue < 1000) {
          note = NOTE_E7;
        }
        else if (forceValue < 1100) {
          note = NOTE_F7;
        }
        tone(buzzer2, note, duration);

      }
      if (tracker % 4 == 3) {
        digitalWrite(led, LOW);
        noTone(buzzer2);
      }
      tracker++;
      // save the last time you blinked the LED
      previousMillis = currentMillis;

    } else {
      digitalWrite(led, LOW);
    }
  } else {
    digitalWrite(led, LOW);
    noTone(buzzer);
  }
}
