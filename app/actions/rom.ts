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
  return (dispatch: Dispatch, getState: GetState) => {

    const { mameProcess, isOpen } = getState().rom
    const { mamePath, mameExec } = getState().config

    // abort if it is already open
    if (isOpen || mameProcess) return

    const callback = (error, stdout, stderr) => {
      if (error) {
        console.error(error)
        dispatch(closeRom(false))
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

    const process = openMame({game, mamePath, mameExec}, callback)
    if (process) {

      process.on('exit', (code) => {
        dispatch(closeGame(false))
        console.log(`Mame exited with code ${code}`);
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
