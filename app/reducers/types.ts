import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type appStateType = {
  counter: counterStateType;
  rom: mameStateType;
};

export type counterStateType = {
  count: number;
};

export type romStateType = {
  isOpen: bool;
};

export type GetState = () => appStateType;

export type Dispatch = ReduxDispatch<Action<string>>;

export type Store = ReduxStore<counterStateType, Action<string>>;
