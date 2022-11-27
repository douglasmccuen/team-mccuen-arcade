import {
  BrowserWindow, ipcMain, IpcMainInvokeEvent, globalShortcut
} from 'electron'

// NOTE: the loudness package doesn't support windows. well it kinda does, but mute is throwing errors
import loudness from 'loudness'

import {
  GET_VOLUME_MUTE_WINDOW, GET_VOLUME_MUTE_OS, VOLUME_MUTE_WINDOW,
  VOLUME_MUTE_OS, GET_VOLUME_LEVEL, SET_VOLUME_LEVEL
} from './constants'

const toggleWindowMute = (win: BrowserWindow) => async () => {
  const { webContents } = win
  webContents.audioMuted = !webContents.audioMuted
  return webContents.audioMuted
}

const isWindowMuted = (win: BrowserWindow) => async () => {
  const { webContents } = win
  return webContents.audioMuted
}

const toggleOSMute = async () => {
  const muted = await loudness.getMuted()
  loudness.setMuted(!muted)
  return !muted
}

const isOSMuted = async () => {
  const muted = await loudness.getMuted()
  return muted
}

const setOSVolume = async (evt: IpcMainInvokeEvent, props: object) => {
  const { level } = props
  loudness.setVolume(level)
  return level
}

const getOSVolume = async () => {
  const level = await loudness.getVolume()
  return level
}

export default class AudioManager {
  mainWindow: BrowserWindow

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow
  }

  activate() {
    // set the volume
    loudness.setVolume(50)

    // handle events
    ipcMain.handle(VOLUME_MUTE_WINDOW, toggleWindowMute(this.mainWindow))
    ipcMain.handle(GET_VOLUME_MUTE_WINDOW, isWindowMuted(this.mainWindow))
    ipcMain.handle(GET_VOLUME_MUTE_OS, isOSMuted)
    ipcMain.handle(VOLUME_MUTE_OS, toggleOSMute)
    ipcMain.handle(GET_VOLUME_LEVEL, getOSVolume)
    ipcMain.handle(SET_VOLUME_LEVEL, setOSVolume)

    // add keyboard shortcuts
    // Player 1 side button 2 AND Player 2 Joystick down
    // globalShortcut.register('3+F', toggleOSMute)
  }

}
