import roulettewheel from './sound/roulettewheel.mp3'

const carouselSpin = new Audio(roulettewheel);
const play = carouselSpin.play.bind(carouselSpin);

const prespin = (length: number) => {
  setTimeout(play, 100)
  const idx = Math.round(Math.random() * length);
  return Promise.resolve(idx)
}

export default prespin
