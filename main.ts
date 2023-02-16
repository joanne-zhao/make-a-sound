radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else {
        music.stopAllSounds()
    }
})
music.setVolume(60)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
    } else {
        radio.sendNumber(1)
    }
})
