import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron'
import openMameWindow from './openMameWindow'
import { OPEN_WINDOW } from './constants'

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
  }

}
