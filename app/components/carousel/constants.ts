import { CarouselState } from './types'

export const transitionTime = 400
export const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`
export const smooth = `transform ${transitionTime}ms ease`
export const smoothSpin = (tt:number) => `transform ${tt}ms linear`
export const initialState: CarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
  pause: 1,
  spinning: false,
  spinCount: 0,
  transitionTime
}
export const keys = {
  back: ['d', 'ArrowLeft'],
  forward: ['g', 'ArrowRight'],
  select: ['5','6']
}
