import UIFx from 'uifx'
import roulettewheel from './sound/roulettewheel.mp3'

const carouselSpin = new UIFx(roulettewheel, { volume: 0.4,  throttleMs: 0 })

const prespin = (length: number) => {
  setTimeout(carouselSpin.play, 100)
  const idx = Math.round(Math.random() * length);
  return Promise.resolve(idx)
}

export default prespin
