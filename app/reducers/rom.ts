import { Action } from 'redux'
import util from 'util'
import { exec } from 'child_process'
import { OPEN_ROM, CLOSE_ROM } from '../actions/rom'

const execPromise = util.promisify(exec)

const openMame = () => {
  const cmd = '/Users/douglasmccuen/Documents/MakeExecutable/mame_start.sh'
  return execPromise(cmd)
    .then(({ stdout }) => {
      // TODO set state
      // eslint-disable-next-line no-console
      console.log(stdout)
      return stdout
    })
    .catch(e => {
      // TODO set state
      // eslint-disable-next-line no-console
      console.error(e)
    })
}

const mame = (state = { isOpen: false }, action: Action<string>) => {
  let update
  switch (action.type) {
    case OPEN_ROM:
      openMame()
      update = { isOpen: !state.isOpen }
      break
    case CLOSE_ROM:
      update = { isOpen: !state.isOpen }
      break
    default:
      update = state
      break
  }
  return update
}

export default mame
