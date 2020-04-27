/* eslint no-param-reassign: off */
import { ConfigAction, RomConfig } from './types'
import { REFRESH } from '../actions/config'

const defaultState = {
  romConfigPath: '',
  mamePath: '',
  mameExec: '',
  roms: [],
  romsByGame: {}
}

const configReducer = (state = defaultState, action: ConfigAction) => {
  if (action.type === REFRESH) {
    const update = { ...action.payload, romsByGame: {} }
    update.romsByGame = update.roms.reduce((byGame: {[key:string]: RomConfig}, rom:RomConfig) => {
      byGame[rom.game] = { ...rom }
      return byGame
    },{})
    return update
  }
  return state
}

export default configReducer
