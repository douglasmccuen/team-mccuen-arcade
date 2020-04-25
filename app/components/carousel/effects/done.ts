import { CarouselState, CarouselAction } from '../types'

type Props = {
  paused: boolean
  state: CarouselState
  dispatch: (n:CarouselAction) => void
}

const doneEffect = ({ paused, state, dispatch }: Props) => () => {
  const { transitionTime, spinning } = state
  if (paused || spinning) return () => {}

  const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
  return () => clearTimeout(id);
}

export default doneEffect
