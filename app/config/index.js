/* eslint no-console: off */

import homeConfig from 'home-config'
import merge from 'lodash/merge'
import defaultAppConfig from './app.config'
import defaultRomConfig from './roms.config'

const configFile = 'Public/games/.teamMcCuen'
const romFile = 'Public/games/.roms'

const loadUserConfig = () => {
  const config = homeConfig.load(configFile, defaultAppConfig)
  const rom = homeConfig.load(romFile, defaultRomConfig)
  return Promise.resolve([config, rom])
}

const writeUserConfig = (cfgs) => {
  if (Array.isArray(cfgs)) {
    cfgs.forEach((config) => {
      config.save()
    })
    return Promise.resolve(cfgs)
  }
  return Promise.reject(new Error('No configs'))
}

const mergeConfig = (cfgs) => {
  if (Array.isArray(cfgs) && cfgs.length===2) {
    // fix the roms config
    const {roms=[]} = cfgs[1].getAll()
    const romsConfg = {roms: roms.map(JSON.parse)}

    const config = merge(cfgs[0].getAll(), romsConfg)
    return Promise.resolve(config)
  }
  return Promise.reject(new Error('Bad configs'))
}

const getConfig = () => {
  return loadUserConfig()
    .then(writeUserConfig)
    .then(mergeConfig)
    .catch(e => {
      console.error(e)
    })
}

export default getConfig
