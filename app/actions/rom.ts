/* eslint no-console: 0 */
import { ipcRenderer } from 'electron'
import { Dispatch, GetState } from '../reducers/types'
import { errorChannel, processExitChannel, OPEN_WINDOW } from '../window/constants'
import { EmulatorProps } from '../window/types'

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

    const { config, rom } = getState()

    const props: EmulatorProps = {
      game: config.romsByGame[game],
      config
    }

    // abort if it is already open
    const { mameProcess, isOpen } = rom
    if (isOpen || mameProcess) return

    const { pid } = await ipcRenderer.invoke(OPEN_WINDOW, props)
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
