const int sens_1 = PA0;
const int sens_2 = PA1;
const int sens_3 = PA2;
const int sens_4 = PA3;
const int sens_5 = PA4;
const int sens_6 = PA5;
const int sens_7 = PA6;
const int sens_8 = PA7;
const int sens_9 = PB0;
const int sens_10 = PB1;

const unsigned long BAUD_RATE = 9600;

void setup(){
    pinMode(sens_1, INPUT_ANALOG);
    pinMode(sens_2, INPUT_ANALOG);
    pinMode(sens_3, INPUT_ANALOG);
    pinMode(sens_4, INPUT_ANALOG);
    pinMode(sens_5, INPUT_ANALOG);
    pinMode(sens_6, INPUT_ANALOG);
    pinMode(sens_7, INPUT_ANALOG);
    pinMode(sens_8, INPUT_ANALOG);
    pinMode(sens_9, INPUT_ANALOG);
    pinMode(sens_10, INPUT_ANALOG);

    Serial.begin(9600);

}


void loop(){

    int sens_1_val, sens_2_val, sens_3_val, sens_4_val, sens_5_val,
        sens_6_val, sens_7_val, sens_8_val, sens_9_val, sens_10_val;
    
    sens_1_val = analogRead(sens_1);
    sens_2_val = analogRead(sens_2);
    sens_3_val = analogRead(sens_3);
    sens_4_val = analogRead(sens_4);
    sens_5_val = analogRead(sens_5);
    sens_6_val = analogRead(sens_6);
    sens_7_val = analogRead(sens_7);
    sens_8_val = analogRead(sens_8);
    sens_9_val = analogRead(sens_9);
    sens_10_val = analogRead(sens_10);

    Serial.println(sens_1_val+', '+sens_2_val+', '+sens_3_val+', '+sens_4_val+
                    ', '+sens_5_val+', '+sens_6_val+', '+sens_7_val+', '+sens_8_val+', '+
                    sens_9_val+', '+sens_10_val);
    
    delay(5);
}
