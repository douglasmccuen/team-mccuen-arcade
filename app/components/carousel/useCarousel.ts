/* eslint no-restricted-globals: off */
import { useReducer, useEffect } from 'react'
import { transitionTime, elastic, smooth, initialState, keys } from './constants'
import carouselReducer from './reducer'

const useCarousel = (
  length: number,
  interval: number,
  onOpen: (n: number) => void,
  paused: bool,
): [number, (n: number) => void, React.CSSProperties] => {

  const [state, dispatch] = useReducer(carouselReducer, initialState);

  useEffect(() => {
    if (paused) return () => {}
    const id = setTimeout(() => dispatch({ type: 'next', length }), state.pause * interval);
    return () => clearTimeout(id);
  }, [state.offset, state.active, state.pause]);

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
    onKeyDown: ({key}) => {
      // console.log(`key: ${key}`)
      if (keys.forward.includes(key)) {
        dispatch({ type: 'next', length, pause: 5 })
      } else if (keys.back.includes(key)) {
        dispatch({ type: 'prev', length, pause: 5 })
      } else if (keys.select.includes(key)) {
        onOpen(state.active)
      }
    },
    onMouseDown: () => false,
    tabIndex: 0
  }

  return [state.active, handlers, style];
}

export default useCarousel
