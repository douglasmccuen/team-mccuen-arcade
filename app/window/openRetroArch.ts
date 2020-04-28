import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'
import getConfig from '../config'

const openRetroArch = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const {romConfigPath, retroArchPath, retroArchExec} = config
  const cd = `cd ~/${retroArchPath}`
  const core = `./Resources/cores/${game.core}`
  const rom = `~/${romConfigPath}/${game.game}`
  const cmd = `${cd}; ./${retroArchExec} -f -L ${core} ${rom}`
  const options = {}
  return exec(cmd, options, cb)
}

export const openRetroArchProcess = async (cb:Callback):Promise<ChildProcess> => {
  const process = await getConfig().then(({retroArchPath, retroArchExec}) => {
    const cmd = `cd ${retroArchPath}; ./${retroArchExec} -f`
    const options = {}
    return exec(cmd, options, cb)
  })
  return process
}

export default openRetroArch