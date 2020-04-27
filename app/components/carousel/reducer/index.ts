import { CarouselAction, CarouselState } from '../types'
import { previous, next } from './helpers'
import { transitionTime } from '../constants'

const carouselReducer = (state: CarouselState, action: CarouselAction): CarouselState => {
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
        transitionTime
      };
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
        pause: action.pause||1,
        transitionTime
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
        pause: action.pause||1,
        transitionTime
      };
    case 'spin':
      return {
        ...state,
        spinCount: action.rotations,
        spinning: true,
        desired: action.desired,
        pause: action.pause||1,
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
        spinning: false,
        spinCount: 0
      };
    default:
      return state;
  }
}

export default carouselReducer
