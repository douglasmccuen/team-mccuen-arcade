/* eslint no-console: 0 */
import { ipcRenderer } from 'electron'
import { Dispatch } from '../reducers/types'
import {
  audioErrorChannel, GET_VOLUME_MUTE_WINDOW, VOLUME_MUTE_WINDOW,
  GET_VOLUME_MUTE_OS, VOLUME_MUTE_OS, GET_VOLUME_LEVEL, SET_VOLUME_LEVEL
} from '../window/constants'

export const TOGGLE_MUTE_WINDOW = 'TOGGLE_MUTE_WINDOW'
export const GET_MUTE_WINDOW = 'GET_MUTE_WINDOW'
export const TOGGLE_MUTE_OS = 'TOGGLE_MUTE_OS'
export const GET_MUTE_OS = 'GET_MUTE_OS'
export const SET_OS_VOLUME = 'SET_OS_VOLUME'
export const GET_OS_VOLUME = 'GET_OS_VOLUME'

ipcRenderer.on(audioErrorChannel, (event, message) => {
  console.error(`Failed to manage audio: ${message}`)
})

const toggleMuteWindow = (isMute: boolean) => {
  return {
    type: TOGGLE_MUTE_WINDOW,
    payload: { isMute }
  }
}

const getMuteWindow = (isMute: boolean) => {
  return {
    type: GET_MUTE_WINDOW,
    payload: { isMute }
  }
}

const toggleMuteOS = (isMute: boolean) => {
  return {
    type: TOGGLE_MUTE_OS,
    payload: { isMute }
  }
}

const getMuteOS = (isMute: boolean) => {
  return {
    type: GET_MUTE_OS,
    payload: { isMute }
  }
}

const setOSVolume = (level: number) => {
  return {
    type: SET_OS_VOLUME,
    payload: { level }
  }
}

const getOSVolume = (level: number) => {
  return {
    type: GET_OS_VOLUME,
    payload: { level }
  }
}

export const muteWindow = () => {
  return async (dispatch: Dispatch) => {
    const isMute = await ipcRenderer.invoke(VOLUME_MUTE_WINDOW, [])
    dispatch(toggleMuteWindow(isMute))
  }
}

export const isWindowMuted = () => {
  return async (dispatch: Dispatch) => {
    const isMute = await ipcRenderer.invoke(GET_VOLUME_MUTE_WINDOW, [])
    dispatch(getMuteWindow(isMute))
  }
}

export const muteOS = () => {
  return async (dispatch: Dispatch) => {
    const isMute = await ipcRenderer.invoke(VOLUME_MUTE_OS, [])
    dispatch(toggleMuteOS(isMute))
  }
}

export const isOSMuted = () => {
  return async (dispatch: Dispatch) => {
    const isMute = await ipcRenderer.invoke(GET_VOLUME_MUTE_OS, [])
    dispatch(getMuteOS(isMute))
  }
}

export const getOSVolumeLevel = () => {
  return async (dispatch: Dispatch) => {
    const level = await ipcRenderer.invoke(GET_VOLUME_LEVEL, [])
    dispatch(getOSVolume(level))
  }
}

export const setOSVolumeLevel = () => {
  return async (dispatch: Dispatch) => {
    const level = await ipcRenderer.invoke(SET_VOLUME_LEVEL, [])
    dispatch(setOSVolume(level))
  }
}
