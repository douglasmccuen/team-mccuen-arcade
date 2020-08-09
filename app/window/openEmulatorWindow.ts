import { ChildProcess } from 'child_process'
import { BrowserWindow } from 'electron'
import openMame, { openMameProcess } from './openMame'
import openRetroArch, { openRetroArchProcess } from './openRetroArch'
import openExe from './openExe'
import { processExitChannel } from './constants'
import callback from './processCallback'
import { EmulatorProps } from './types'

const openWindow = (browserWindow: BrowserWindow) =>
  (props: EmulatorProps):Promise<ChildProcess> => {
    const { game } = props
    let process:ChildProcess
    switch(game.emulator) {
      case "mame":
       process = openMame(props, callback(browserWindow.webContents))
       break
      case "retro":
        process = openRetroArch(props, callback(browserWindow.webContents))
        break;
      default:
        process = openExe(props, callback(browserWindow.webContents))
    }

    process.on('exit', (code) => {
      browserWindow.webContents.send(processExitChannel(process.pid), code)
      browserWindow.setFullScreen(true)
    })
    return Promise.resolve(process)
  }

export const openMameForConfig = async (browserWindow: BrowserWindow) => {
  browserWindow.setFullScreen(false)
  const process = await openMameProcess(callback(browserWindow.webContents))
  process.on('exit', (code) => {
    browserWindow.focus()
    browserWindow.webContents.send(processExitChannel(process.pid), code)
    browserWindow.setFullScreen(true)
  })
  return Promise.resolve(process)
}

export const openRetroArchForConfig = async (browserWindow: BrowserWindow) => {
  browserWindow.setFullScreen(false)
  const process = await openRetroArchProcess(callback(browserWindow.webContents))
  process.on('exit', (code) => {
    browserWindow.focus()
    browserWindow.webContents.send(processExitChannel(process.pid), code)
    browserWindow.setFullScreen(true)
  })
  return Promise.resolve(process)
}

export default openWindow
