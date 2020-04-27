// ipc channels
export const errorChannel = 'window-open-error'
export const processExitChannel = (pid:number) => `window-${pid}-exit`
export const audioErrorChannel = 'audio-error'
export const sleepErrorChannel = 'sleep-error'

// actions
export const OPEN_WINDOW = 'OPEN_WINDOW'
export const GET_VOLUME_LEVEL = 'GET_VOLUME_LEVEL'
export const SET_VOLUME_LEVEL = 'SET_VOLUME_LEVEL'
export const VOLUME_MUTE_WINDOW = 'VOLUME_MUTE_WINDOW'
export const VOLUME_MUTE_OS = 'VOLUME_MUTE_OS'
export const GET_VOLUME_MUTE_WINDOW = 'GET_VOLUME_MUTE_WINDOW'
export const GET_VOLUME_MUTE_OS = 'GET_VOLUME_MUTE_OS'
export const SYSTEM_SLEEP = 'SYSTEM_SLEEP'
