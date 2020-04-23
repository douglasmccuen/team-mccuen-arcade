/* eslint no-console: 0 */
import { ipcRenderer } from 'electron'
import { errorChannel, processExitChannel, OPEN_WINDOW } from '../window/constants'

export const OPEN_ROM = 'OPEN_ROM';
export const CLOSE_ROM = 'CLOSE_ROM';

const openRom = (mameProcess, game) => {
  return {
    type: OPEN_ROM,
    payload: { mameProcess, game }
  }
}

const closeRom = () => {
  return {
    type: CLOSE_ROM
  }
}

export function closeGame(kill: bool) {
  return (dispatch: Dispatch, getState: GetState) => {
    const { mameProcess } = getState().rom
    if (mameProcess && kill) {
      // TODO if this app closes/exits it should close this mameProcess
      mameProcess.kill(2)
      console.log('closed the mame process')
    }
    dispatch(closeRom())
  }
}

export function openGame(game: string) {
  return async (dispatch: Dispatch, getState: GetState) => {

    const { mameProcess, isOpen } = getState().rom
    const { mamePath, mameExec } = getState().config

    // abort if it is already open
    if (isOpen || mameProcess) return

    const { pid } = await ipcRenderer.invoke(OPEN_WINDOW, {game, mamePath, mameExec})
    if (pid) {

      ipcRenderer.on(processExitChannel(pid), (event, code) => {
        dispatch(closeGame(false))
        console.log(`Mame exited with code: ${code}`);
      })

      ipcRenderer.on(errorChannel, (event, message) => {
        console.error(`Failed to open mame window: ${message}`)
        dispatch(closeRom(false))
      })

      setTimeout(() => {
        dispatch(openRom(process, game))
      }, 2000)

    } else {
      console.error("no child process created")
      dispatch(closeRom(false))
    }
  }
}
