import { CarouselState, CarouselAction } from '../types'

type Props = {
  paused: boolean
  interval: number
  length: number
  state: CarouselState
  dispatch: (n:CarouselAction) => void
}

const nextEffect = ({ paused, interval, length, state, dispatch }: Props) => () => {
  const { pause, spinning } = state
  if (paused || spinning) return () => {}
  const timeout = pause * interval
  const id = setTimeout(() => dispatch({ type: 'next', length }), timeout);
  return () => clearTimeout(id);
}

export default nextEffect
