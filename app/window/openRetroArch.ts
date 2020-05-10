import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'
import getConfig from '../config'

const openRetroArch = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const {romConfigPath, retroArchPath, retroArchExec} = config

  // windows vs mac differences follow...
  const cd = `cd %userprofile%\\Public\\${retroArchPath}`
  const core = `%userprofile%\\AppData\\Roaming\\RetroArch\\cores\\${game.core}`
  const rom = `%userprofile%\\${romConfigPath}\\${game.game}`
  const cmd = `${cd} && ${retroArchExec}.lnk -f -L ${core} ${rom}`
  const options = {}
  return exec(cmd, options, cb)
}

export const openRetroArchProcess = async (cb:Callback):Promise<ChildProcess> => {
  const process = await getConfig().then(({retroArchPath, retroArchExec}) => {
    const cmd = `cd %userprofile%\\Public\\${retroArchPath} && ${retroArchExec}.lnk -f`
    const options = {}
    return exec(cmd, options, cb)
  })
  return process
}

export default openRetroArch
