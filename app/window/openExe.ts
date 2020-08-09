import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'

const openExe = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const {romConfigPath} = config

  // windows vs mac differences follow...
  const cd = `cd %userprofile%\\${romConfigPath}`
  const cmd = `${cd} && ${game.game} -fullscreen`
  const options = {}
  return exec(cmd, options, cb)
}

export default openExe
