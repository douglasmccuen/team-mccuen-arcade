/* eslint no-console: off */
import homeConfig from 'home-config'
import merge from 'lodash/merge'
import defaultAppConfig from './app.config'
import defaultRomConfig from './roms.config'

const configFile = 'Public/games/.teamMcCuen'
const romFile = 'Public/games/.roms'

const loadUserConfig = () => {

  // update the defaultAppConfig to include the user's home dir in the mamePath
  defaultAppConfig.mamePath = `${homeConfig.homeDir}/${defaultAppConfig.mamePath}`

  const config = homeConfig.load(configFile, defaultAppConfig)
  const romsConfig = homeConfig.load(romFile, defaultRomConfig)

  // get the rom config from the user's home dir, or just use the default...
  // using the default...
  romsConfig.roms = defaultRomConfig.roms

  return Promise.resolve([config, romsConfig])
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
    const config = merge(cfgs[0].getAll(), cfgs[1].getAll())
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
