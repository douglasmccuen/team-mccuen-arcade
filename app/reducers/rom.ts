import { Action } from 'redux'
import { OPEN_ROM, CLOSE_ROM } from '../actions/rom'

const defaultState = {
  isOpen: false,
  mameProcess: null
}

const mame = (state = defaultState, action: Action<string>) => {
  let update
  switch (action.type) {
    case OPEN_ROM:
      update = { isOpen: true, mameProcess: action.payload.mameProcess }
      break
    case CLOSE_ROM:
      update = { isOpen: false, mameProcess: null }
      break
    default:
      update = state
      break
  }
  return update
}

export default mame
