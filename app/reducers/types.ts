import { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'

export type romStateType = {
  isOpen: boolean
  game: string
  mameProcess: object
}

export type RomConfig = {
  game: string
  name: string
  emulator: string,
  core?: string,
  image: string
  preview: string
  description: string
  rating: number
}

export type configStateType = {
  roms: [RomConfig]
  romsByGame: {[key:string]: RomConfig}
  romConfigPath: string
  mamePath: string
  mameExec: string
  retroArchPath: string
  retroArchExec: string

}

export type windowStateType = {
  isWindowMuted: boolean
  isOSMuted: boolean
  volumeLevel: number
}

export type appStateType = {
  rom: romStateType
  config: configStateType
  win: windowStateType
}

export interface GameAction {
  type: string
  payload?: { mameProcess: number, game: string }
}

export interface ConfigAction {
  type: string
  payload: configStateType
}

export interface WindowAction {
  type: string
  payload: { isMute?: boolean, level?: number }
}

export type AppAction =
  | GameAction
  | ConfigAction
  | WindowAction;

export type GetState = () => appStateType

export type Dispatch = ReduxDispatch<AppAction>

export type Store = ReduxStore<appStateType, AppAction>
