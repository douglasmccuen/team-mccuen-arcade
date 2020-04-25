import { CarouselState, CarouselAction } from '../types'

type Props = {
  paused: boolean
  state: CarouselState
  dispatch: (n:CarouselAction) => void
}

// one second
const spinFactor = 1000

const spinningEffect = ({ paused, state, dispatch }: Props) => () => {
  const { spinCount, spinning } = state

  if (paused || !spinning) return () => {}

  const id = setTimeout(() => dispatch({ type: 'done' }), spinCount*spinFactor);
  return () => clearTimeout(id);
}

export default spinningEffect
