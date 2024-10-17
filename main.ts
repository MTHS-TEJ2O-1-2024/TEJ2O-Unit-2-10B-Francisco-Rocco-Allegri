/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program lights up some neopixels based on the light amount.
*/

//This code clears screen, sets the neopixel information, and follows with a happy face.
basic.clearScreen()

let neopixelStrip = neopixel.create(DigitalPin.P16,4, NeoPixelMode.RGB)
let level = input.lightLevel()

neopixelStrip.clear()

basic.showIcon(IconNames.Happy)

//Displays the light as a number value when the A button is pressed
input.onButtonPressed(Button.A, function() {
    
    neopixelStrip.clear()
    neopixelStrip.show()
    basic.pause(500)
    level = input.lightLevel()

    basic.clearScreen()
    basic.pause(500)
    
    basic.showNumber(level)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)

    //Sets light number information
    if (level > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }

    if (level <= 51) {
    //No light displayed
    }

    if (level > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }

    if (level > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }

    if (level > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }
    
    neopixelStrip.show()

    })

