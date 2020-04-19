import { Action } from 'redux';
import util from 'util';
import { exec } from 'child_process';
import { OPEN_ROM, CLOSE_ROM } from '../actions/rom';

const execPromise = util.promisify(exec);

const openMame = () => {
  const cmd = '/Users/douglasmccuen/Documents/MakeExecutable/mame_start.sh';
  return execPromise(cmd);
};

export default function mame(
  state = { isOpen: false },
  action: Action<string>
) {
  switch (action.type) {
    case OPEN_ROM:
      openMame()
        .then(({ stdout }) => {
          // TODO set state
          // eslint-disable-next-line no-console
          console.log(stdout);
          return stdout;
        })
        .catch(e => {
          // TODO set state
          // eslint-disable-next-line no-console
          console.error(e);
        });
      return { isOpen: !state.isOpen };
    case CLOSE_ROM:
    default:
      return { isOpen: !state.isOpen };
  }
}
