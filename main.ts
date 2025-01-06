let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (hand == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (hand == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
