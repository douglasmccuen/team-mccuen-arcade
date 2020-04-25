/* eslint no-console: 0 */
import { Dispatch, configStateType } from '../reducers/types'
import getConfig from '../config'

export const REFRESH = 'REFRESH'

const refreshConfig = (config: configStateType) => {
  return {
    type: REFRESH,
    payload: config
  }
}

const refreshConfigAsync = () => {
  return (dispatch: Dispatch) => {
    getConfig()
      .then((cfg: configStateType) => {
        dispatch(refreshConfig(cfg))
        return true
      })
      .catch(console.error)
  }
}

export default refreshConfigAsync
