import {
  BrowserWindow, ipcMain, IpcMainInvokeEvent, globalShortcut
} from 'electron'

// NOTE this doesnt work on Windows.  They try, but the command is failing.  But the source looks very close.
import sleep from 'suspend-pc'

import openEmulatorWindow, { openMameForConfig, openRetroArchForConfig } from './openEmulatorWindow'
import { OPEN_WINDOW, SYSTEM_SLEEP, sleepErrorChannel } from './constants'
import { EmulatorProps } from './types'

const handleSleep = (win: BrowserWindow) => async () => {
  // rundll32.exe powrprof.dll,SetSuspendState 0,1,0
  sleep((err:Error) => {
    if (err) {
      win.webContents.send(sleepErrorChannel, err.message)
    }
  })
  return true
}

export default class WindowManager {
  mainWindow: BrowserWindow

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow
  }

  activate() {
    this.mainWindow.setFullScreen(true)
    ipcMain.handle(OPEN_WINDOW, async (_: IpcMainInvokeEvent, props: EmulatorProps) => {
      const result = await openEmulatorWindow(this.mainWindow)(props)

      // TODO if this app closes/exits it should close this mameProcess
      // result.kill(2)
      // ... but where to stash it?

      this.mainWindow.setFullScreen(false)
      return result
    })
    ipcMain.handle(SYSTEM_SLEEP, handleSleep(this.mainWindow))

    // add keyboard shortcuts
    // globalShortcut.register('4+Up', handleSleep(this.mainWindow))
  }

  goToSleep() {
    handleSleep(this.mainWindow)
  }

  openMame() {
    openMameForConfig(this.mainWindow)
  }

  openRetroArch() {
    openRetroArchForConfig(this.mainWindow)
  }

}
