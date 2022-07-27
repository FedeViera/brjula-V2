basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else if (input.compassHeading() >= 1 && input.compassHeading() <= 89) {
        basic.showString("NE")
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
    } else if (input.compassHeading() >= 91 && input.compassHeading() <= 179) {
        basic.showString("SE")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() >= 181 && input.compassHeading() <= 269) {
        basic.showString("SO")
    } else if (input.compassHeading() == 270) {
        basic.showString("O")
    } else if (input.compassHeading() >= 271 && input.compassHeading() <= 359) {
        basic.showString("NO")
    }
})
