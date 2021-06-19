bool valve1state = false;
bool valve2state = false;
bool valve3state = false;
bool valve4state = false;
bool valve5state = false;
bool valve6state = false;

const int valve1 = PB9;
const int valve2 = PB8;
const int valve3 = PB7;
const int valve4 = PB6;
const int valve5 = PB5;
const int valve6 = PB4;

void setup() {
  // put your setup code here, to run once:
pinMode(valve1,OUTPUT);
pinMode(valve2,OUTPUT);
pinMode(valve3,OUTPUT);
pinMode(valve4,OUTPUT);
pinMode(valve5,OUTPUT);
pinMode(valve6,OUTPUT);

digitalWrite(valve1, LOW);
digitalWrite(valve2, LOW);
digitalWrite(valve1, LOW);
digitalWrite(valve2, LOW);
digitalWrite(valve1, LOW);
digitalWrite(valve2, LOW);

Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int incoming;
if(Serial.available() >0){
  incoming = Serial.read();
  if (incoming == 65 ){
      valve1state = (!valve1state);
      if (valve1state == true)
      digitalWrite(valve1, HIGH);
      else
      digitalWrite(valve1, LOW);
  }
  else  if (incoming == 66 ){
      valve2state =! valve2state;
      if (valve2state == true)
      digitalWrite(valve2, HIGH);
      else 
      digitalWrite(valve2, LOW);
  }
  
   else  if (incoming == 67 ){
      valve3state =! valve3state;
      if (valve3state == true)
      digitalWrite(valve3, HIGH);
      else 
      digitalWrite(valve3, LOW);
   }  
  
   else  if (incoming == 68 ){
      valve4state =! valve4state;
      if (valve4state == true)
      digitalWrite(valve4, HIGH);
      else 
      digitalWrite(valve4, LOW);
   }  
     else  if (incoming == 69 ){
      valve5state =! valve5state;
      if (valve5state == true)
      digitalWrite(valve5, HIGH);
      else 
      digitalWrite(valve5, LOW);
   }
      else  if (incoming == 70 ){
      valve6state =! valve6state;
      if (valve6state == true)
      digitalWrite(valve6, HIGH);
      else 
      digitalWrite(valve6, LOW);
   }  
    
  
delay(100);
}
}
