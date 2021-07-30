let ぐーちょきぱー = 0
input.onGesture(Gesture.Shake, function () {
    ぐーちょきぱー = randint(0, 2)
    if (ぐーちょきぱー == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (ぐーちょきぱー == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
