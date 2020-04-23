import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import rom from './rom'
import config from './config'
import win from './window'

// TODO get the config and put it in state

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    rom,
    config,
    win
  })
}
