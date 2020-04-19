// import { GetState, Dispatch } from '../reducers/types';

export const OPEN_ROM = 'OPEN_ROM';
export const CLOSE_ROM = 'CLOSE_ROM';

export function openGame() {
  return {
    type: OPEN_ROM
  };
}

export function closeGame() {
  return {
    type: CLOSE_ROM
  };
}
