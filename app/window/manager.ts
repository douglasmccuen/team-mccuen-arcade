import {
  BrowserWindow, ipcMain, IpcMainInvokeEvent, globalShortcut
} from 'electron'
import sleep from 'suspend-pc'
import openMameWindow from './openMameWindow'
import { OPEN_WINDOW, SYSTEM_SLEEP, sleepErrorChannel } from './constants'

const handleSleep = (win) => async () => {
  sleep(err => {
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
    ipcMain.handle(OPEN_WINDOW, async (evt: IpcMainInvokeEvent, props: object) => {
      const result = await openMameWindow(this.mainWindow)(props)
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
