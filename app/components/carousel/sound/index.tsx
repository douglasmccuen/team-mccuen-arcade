import React from 'react'
import UIFx from 'uifx'
import clickSound from './roulettewheel.mp3'

const carouselClick = new UIFx(clickSound, { volume: 0.4,  throttleMs: 0 })

const Sound = () => {
  carouselClick.play()
  return (<></>)
}

export default Sound
