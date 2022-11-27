import {  ExecException } from 'child_process'
import { RomConfig, configStateType } from '../reducers/types'

export type EmulatorProps = {
  game: RomConfig,
  config: configStateType
}

export type Callback = (err: ExecException|null, stdout?: string, stderr?: string) => void
