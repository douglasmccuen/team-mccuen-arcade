import {
  BrowserWindow, ipcMain, IpcMainInvokeEvent, globalShortcut
} from 'electron'
import sleep from 'suspend-pc'
import openMameWindow from './openMameWindow'
import { OPEN_WINDOW, SYSTEM_SLEEP, sleepErrorChannel } from './constants'

const handleSleep = (win: BrowserWindow) => async () => {
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
    ipcMain.handle(OPEN_WINDOW, async (_: IpcMainInvokeEvent, props: object) => {
      const result = await openMameWindow(this.mainWindow)(props)

      // TODO if this app closes/exits it should close this mameProcess
      // result.kill(2)
      // ... but where to stash it?

      this.mainWindow.setFullScreen(false)
      return result
    })
    ipcMain.handle(SYSTEM_SLEEP, handleSleep(this.mainWindow))

    // add keyboard shortcuts
    globalShortcut.register('4+Up', handleSleep(this.mainWindow))
  }

  goToSleep() {
    handleSleep(this.mainWindow)
  }

}
