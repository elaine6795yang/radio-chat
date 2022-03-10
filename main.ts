input.onPinReleased(TouchPin.P0, function () {
    radio.sendString("See you!")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello!")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendString("What's up? Anything new?")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Let's talk on zoom! Zoom meeting ID: 222 706 6417")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Goodbye!")
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendString("Goodnight!")
})
radio.setGroup(17)
radio.setTransmitPower(7)
