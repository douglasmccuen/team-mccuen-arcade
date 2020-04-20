import { CarouselAction, CarouselState } from './types'
import { previous, next } from './helpers'

const carouselReducer = (state: CarouselState, action: CarouselAction): CarouselState => {
  switch (action.type) {
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    default:
      return state;
  }
}

export default carouselReducer
