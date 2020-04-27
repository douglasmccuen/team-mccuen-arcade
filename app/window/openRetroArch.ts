import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'

const openRetroArch = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const {romConfigPath, retroArchPath, retroArchExec} = config
  const cd = `cd ~/${retroArchPath}`
  const core = `./Resources/cores/${game.core}`
  const rom = `~/${romConfigPath}/${game.game}`
  const cmd = `${cd}; ./${retroArchExec} -f -L ${core} ${rom}`
  const options = {}
  return exec(cmd, options, cb)
}

export default openRetroArch
