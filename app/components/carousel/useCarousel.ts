/* eslint no-restricted-globals: off */
import { useReducer, useEffect } from 'react'
import { transitionTime, elastic, smooth, initialState, keys } from './constants'
import carouselReducer from './reducer'

const useCarousel = (
  length: number,
  interval: number,
): [number, (n: number) => void, React.CSSProperties] => {

  const [state, dispatch] = useReducer(carouselReducer, initialState);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'next', length }), interval);
    return () => clearTimeout(id);
  }, [state.offset, state.active]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const itemScale = 20
  const extraItems = 8

  const style: React.CSSProperties = {
    transform: 'translateX(0)',
    width: `${itemScale * (length + extraItems)}%`,
    left: `-${(state.active + 1) * itemScale}%`,
  };

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir = (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (100 * (pref || dir)) / (length + extraItems);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  const handlers = {
    onKeyPress: ({key}) => {
      // console.log(key)
      if (key === keys.forward) {
        dispatch({ type: 'next', length })
      } else if (key === keys.back) {
        dispatch({ type: 'prev', length })
      }
    },
    onMouseDown: () => false,
    tabIndex: 0
  }

  return [state.active, handlers, style];
}

export default useCarousel
