import homeConfig from 'home-config'
import defaultRomConfig from './roms.config'
import { RomConfig } from './types'

const romFile = 'Public/games/.roms'

const mergeNewGames = () => {

  const userConfig = homeConfig.load(romFile, defaultRomConfig)
  // fix the roms config as needed
  const { roms=[] } = userConfig.getAll()
  try {
    userConfig.roms = roms.map(JSON.parse)
  } catch(e) {
    // error catch when file doesn't exist, and it is first created
    // console.error(e)
  }

  // force new games into the config
  const newGames = defaultRomConfig.roms.filter(x => {
    let isNew = true
    userConfig.roms.forEach(({ game }:RomConfig) => {
      if (x.game === game) {
        isNew = false
      }
    })
    return isNew
  })
  if (newGames.length > 0) userConfig.roms = roms.concat(newGames)

  return userConfig
}

export default mergeNewGames
