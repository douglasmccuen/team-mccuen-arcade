import { Action } from 'redux';
import { OPEN_ROM, CLOSE_ROM } from '../actions/rom';

export default function mame(
  state = { isOpen: false },
  action: Action<string>
) {
  switch (action.type) {
    case OPEN_ROM:
    case CLOSE_ROM:
    default:
      return { isOpen: !isOpen };
  }
}
