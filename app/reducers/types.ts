import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux'

export type romStateType = {
  isOpen: boolean
  game: string
  mameProcess: object
}

export type configStateType = {
  isOpen: boolean
  game: string
  mameProcess: object
  config: object
}

export type windowStateType = {
  isWindowMuted: boolean
  isOSMuted: boolean
  volumeLevel: number
}

export type appStateType = {
  rom: romStateType
  config: object
  window: windowStateType
}

export type GameAction = {
  type: string
  payload: object
}


export type GetState = () => appStateType

export type Dispatch = ReduxDispatch<Action<GameAction>>

export type Store = ReduxStore<appStateType, Action<GameAction>>
