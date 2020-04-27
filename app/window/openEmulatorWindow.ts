import { ChildProcess } from 'child_process'
import { BrowserWindow } from 'electron'
import openMame from './openMame'
import { processExitChannel } from './constants'
import callback from './processCallback'
import { EmulatorProps } from './types'

const openWindow = (browserWindow: BrowserWindow) =>
  (props: EmulatorProps):Promise<ChildProcess> => {
    const process = openMame(props, callback(browserWindow.webContents))
    process.on('exit', (code) => {
      browserWindow.webContents.send(processExitChannel(process.pid), code)
      browserWindow.setFullScreen(true)
    })
    return Promise.resolve(process)
  }

export default openWindow
