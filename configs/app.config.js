/* eslint-disable no-unused-vars */
import merge from 'lodash/merge'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    openMame: '/Users/douglasmccuen/Documents/MakeExecutable/mame_start.sh'
  },
  test: { },
  development: { },
  production: { }
}

const cfg = merge(config.all, config[config.all.env])
export default cfg
