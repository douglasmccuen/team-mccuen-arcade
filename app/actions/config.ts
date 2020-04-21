/* eslint no-console: 0 */
import { Dispatch } from '../reducers/types'
import getConfig from '../config'

export const REFRESH = 'REFRESH'

const refreshConfig = (config) => {
  return {
    type: REFRESH,
    payload: config
  }
}

const refreshConfigAsync = () => {
  return (dispatch: Dispatch) => {
    getConfig()
      .then((cfg) => {
        dispatch(refreshConfig(cfg))
        return true
      })
      .catch(console.error)
  }
}

export default refreshConfigAsync
