input.onButtonPressed(Button.A, function () {
    if (süre == 0) {
        süre = 5
        basic.showNumber(süre)
    }
    while (süre > 0) {
        basic.showNumber(süre)
        basic.pause(1000)
        süre += 0 - 1
    }
    basic.clearScreen()
    while (true) {
        WaitUntilBlocks.waitUntilPinPressed(TouchPin.P1)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        basic.showString("CARPTIN")
        WaitUntilBlocks.waitUntilPinPressed(TouchPin.P2)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        basic.showString("KAZANDIN!")
    }
})
let süre = 0
süre = 0
