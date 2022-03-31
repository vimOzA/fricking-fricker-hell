basic.forever(function () {
    if (input.lightLevel() < 0 && input.lightLevel() < 50) {
        music.playMelody("C5 C5 B G A F E C ", 190)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (input.lightLevel() > 49 && input.lightLevel() < 100) {
        music.playMelody("A G F B E D C5 C ", 190)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (input.lightLevel() > 99) {
        music.playMelody("E D D C F G D C ", 189)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
