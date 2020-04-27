/* eslint no-console: 0 */
import { ipcRenderer } from 'electron'
import { Dispatch, GetState } from '../reducers/types'
import { errorChannel, processExitChannel, OPEN_WINDOW } from '../window/constants'

export const OPEN_ROM = 'OPEN_ROM';
export const CLOSE_ROM = 'CLOSE_ROM';

const openRom = (mameProcess: number, game: string) => {
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

export function closeGame() {
  return (dispatch: Dispatch) => {
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

      ipcRenderer.on(processExitChannel(pid), (_, code) => {
        dispatch(closeRom())
        console.log(`Mame exited with code: ${code}`);
      })

      ipcRenderer.on(errorChannel, (_, message) => {
        console.error(`Failed to open mame window: ${message}`)
        dispatch(closeRom())
      })

      setTimeout(() => {
        dispatch(openRom(pid, game))
      }, 2000)

    } else {
      console.error("no child process created")
      dispatch(closeRom())
    }
  }
}
