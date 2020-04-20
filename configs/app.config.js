/* eslint-disable no-unused-vars */
import merge from 'lodash/merge'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    mamePath: '/Users/douglasmccuen/mame',
    mameExec: 'mame64'
  },
  test: { },
  development: { },
  production: { }
}

const cfg = merge(config.all, config[config.all.env])
export default cfg
