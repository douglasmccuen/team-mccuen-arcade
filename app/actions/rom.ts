/* eslint no-console: 0 */
import openMame from './helpers/openMame';

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

export function closeGame() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { mameProcess } = getState().rom
    if (mameProcess) {
      // TODO if this app closes/exits it should close this mameProcess
      console.log('close the mame process')
    }
    dispatch(closeRom())
  }
}

export function openGame(game: string) {
  return (dispatch: Dispatch, getState: GetState) => {

    const { mameProcess, isOpen } = getState().rom

    // abort if it is already open
    if (isOpen || mameProcess) return

    const callback = (error, stdout, stderr) => {
      if (error) {
        // TODO set state
        console.error(error)
        dispatch(closeRom())
      }
      // NOTE: the script being called doesn't return a buffer, so stdout and stderr will be strings
      // Perhaps calling mame directly will result in a buffer.
      /*
      stdout.on('data', (data) => {
        console.log(data.toString());
      })

      stderr.on('data', (data) => {
        console.error(data.toString());
      })
      */
      console.log(stdout)
      console.log(stderr)
    }

    const process = openMame(game, callback)
    if (process) {
      process.on('exit', (code) => {
        dispatch(closeGame())
        console.log(`Mame exited with code ${code}`);
      })
      setTimeout(() => {
        dispatch(openRom(process, game))
      }, 2000)

    } else {
      console.error("no child")
      dispatch(closeRom())
    }
  }
}
