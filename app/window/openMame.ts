import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'

const openMame = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const {mamePath, mameExec} = config
  const cmd = `cd ${mamePath}; ./${mameExec} ${game.game}`
  const options = {}
  return exec(cmd, options, cb)
}

export const openMameProcess = (cb:Callback):ChildProcess => {
  const mamePath = '~/mame'
  const mameExec = 'mame64'
  const cmd = `cd ${mamePath}; ./${mameExec} `
  const options = {}
  return exec(cmd, options, cb)
}

export default openMame
