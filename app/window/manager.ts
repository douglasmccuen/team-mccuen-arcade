import { BrowserWindow, ipcMain } from 'electron'
import openMameWindow from './openMame'
import { OPEN_WINDOW } from './constants'

export default class WindowManager {
  mainWindow: BrowserWindow

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow
  }

  activate() {
    ipcMain.handle(OPEN_WINDOW, async (event, props) => {
      const result = await openMameWindow(this.mainWindow.webContents)(props)
      return result
    })
  }

}
