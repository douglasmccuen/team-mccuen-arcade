type RomConfig = {
  game: string
  name: string
  emulator: string
  image: string
  preview: string
  description: string
  rating: number
}

type ConfigFile = {
  roms: [RomConfig]
}

export { ConfigFile, RomConfig }
