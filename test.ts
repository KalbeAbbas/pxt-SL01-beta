let res = SL01.Begin()
basic.pause(1000)
basic.forever(function () {
    basic.showString("Light: ")
    basic.showString(SL01.readLight().toString())
    basic.pause(100)

})
