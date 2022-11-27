/* eslint no-restricted-globals: off */
/* eslint no-console: off */
import { useReducer, useEffect } from 'react'
import { elastic, smooth, smoothSpin, initialState, keys } from './constants'
import carouselReducer from './reducer'
import {spinningEffect, nextEffect, doneEffect } from './effects'
import prespin from './prespin'

type returnTypes = [
  number,
  object,
  React.CSSProperties,
  boolean,
  boolean,
  (n: number) => void
]

const useCarousel = (
  length: number,
  interval: number,
  onOpen: (n: number) => void,
  paused: boolean,
): returnTypes => {

  const [state, dispatch] = useReducer(carouselReducer, initialState);

  // these trigger actions based on changing input
  useEffect(nextEffect({paused, state, dispatch, length, interval}), [state.offset, state.active, state.pause, state.spinning]);
  useEffect(doneEffect({paused, state, dispatch}), [state.desired, state.spinning]);
  useEffect(spinningEffect({paused, state, dispatch}), [state.spinning]);

  // percentage of screen width for the game in the carousel
  const itemScale = 20

  // number of offscreen games in the carousel to fill gaps during rotation
  const extraItems = 8

  let style: React.CSSProperties = {
    transform: 'translateX(0)',
    width: `${itemScale * (length + extraItems)}%`,
    left: `-${(state.active + 1) * itemScale}%`,
  };

  if (state.spinning) {
    const { spinCount } = state
    style = {
      width: `${itemScale * (length + extraItems)}%`,
      transition: smoothSpin(1000),
      animationDuration: `${1}s`,
      animationIterationCount: spinCount,
    }
  } else if (state.desired !== state.active) {
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
    onKeyDown: ({key}: KeyboardEvent) => {
      // console.log(`key: ${key}`)
      if (keys.forward.includes(key)) {
        dispatch({ type: 'next', length, pause: 5 })
      } else if (keys.back.includes(key)) {
        dispatch({ type: 'prev', length, pause: 5 })
      } else if (keys.select.includes(key)) {
        onOpen(state.active)
      } else if (keys.spin.includes(key)) {
        prespin(length)
          .then(idx => {
            // console.log(`random index: ${idx}`)
            const delay = 11*1000 // 11 seconds
            dispatch({ type: 'spin', rotations: 8, desired: idx, pause: 5})
            setTimeout(() => { onOpen(idx) }, delay)
            return true
          })
          .catch(console.error)


      }
    },
    onMouseDown: () => false,
    tabIndex: 0
  }

  const isMoving = (state.desired !== state.active)
  const jumpTo = (n:number) => dispatch({ type: 'jump', desired: n })

  return [state.active, handlers, style, isMoving, state.spinning, jumpTo];
}

export default useCarousel
