import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux'

export type romStateType = {
  isOpen: bool
  game: string
  mameProcess: object
}

export type configStateType = {
  isOpen: bool
  game: string
  mameProcess: object
  config: object
}

export type appStateType = {
  rom: romStateType
  config: object
}


export type GetState = () => appStateType

export type Dispatch = ReduxDispatch<Action<string>>

export type Store = ReduxStore<counterStateType, Action<string>>
