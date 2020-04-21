import { Action } from 'redux'
import { REFRESH } from '../actions/config'

const defaultState = {
  romConfigPath: '',
  mamePath: '',
  mameExec: '',
  roms: []
}

const configReducer = (state = defaultState, action: Action<string>) => {
  return (action.type === REFRESH) ? action.payload : state 
}

export default configReducer
