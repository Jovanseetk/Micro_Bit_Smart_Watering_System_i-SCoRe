let Soil_Moisture_Reading = 0
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
led.setBrightness(64)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        Soil_Moisture_Reading = pins.digitalReadPin(DigitalPin.P0)
        radio.sendNumber(Soil_Moisture_Reading / 4)
        pins.analogWritePin(AnalogPin.P0, 0)
        led.plotBarGraph(
        Soil_Moisture_Reading,
        1023
        )
        if (input.buttonIsPressed(Button.A)) {
            basic.showNumber(Soil_Moisture_Reading)
        }
        while (Soil_Moisture_Reading < 500) {
            basic.showIcon(IconNames.Sad)
            while (Soil_Moisture_Reading < 500) {
                pins.servoWritePin(AnalogPin.P0, 0)
                basic.pause(2000)
                pins.servoWritePin(AnalogPin.P0, 100)
                basic.pause(2000)
                pins.servoWritePin(AnalogPin.P0, 0)
            }
        }
        basic.pause(1800 * 1000)
    }
})
