let PacketNum = 0
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showString("@" + radio.receivedPacket(RadioPacketProperty.SignalStrength) + "dB")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("Packet #" + PacketNum)
    PacketNum += 1
})
