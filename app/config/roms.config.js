const roms = {
  roms: [
    {
      game: 'alpinerd',
      name: 'Alpine Racer',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/alpineracer.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/22298-ingame-Alpine-Racer.jpg',
      rating: 5,
      description: 'This game is pretty cool, but it needs a computer faster than our little mac mini to run the super advanced animation.'
    },
    {
      game: 'btimem',
      name: 'Burger Time',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/burgertime.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/BTIME.png',
      rating: 5,
      description: 'They were putting eggs on burgers before it was cool.  Don\'t forget to use your pepper.'
    },
    {
      game: 'cninja',
      name: 'Caveman Ninja',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/cninja.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/cninja.png',
      rating: 5,
      description: ''
    },
    {
      game: 'centiped',
      name: 'Centipede',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/centepede.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/centipede.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'crusnusa',
      name: "Cruis'n USA",
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/cruisinusa.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/15633-ingame-Cruisn-USA.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'defenderb',
      name: 'Defender',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/defender.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/defender.png',
      rating: 3,
      description: 'I think the image says it all... there isn\'t much going on in this game.'
    },
    {
      game: 'digdug',
      name: 'Dig Dug',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/digdug.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9512-ingame-Dig-Dug.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'dkong',
      name: 'Donkey Kong',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/dkong.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/dkong.png',
      rating: 5,
      description: 'Dad\'s favorite game of all time... Not sure he\'s seen anything beyond level 3.'
    },
    {
      game: 'doom.smc',
      name: 'Doom',
      emulator: 'retro',
      core: 'snes9x_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/doom.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/doom.jpg',
      rating: 5,
      description: 'The original first-person zombie shooter...'
    },
    {
      game: 'excitebk',
      name: 'Excite Bike',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/excitbkj.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/excitbkj.png',
      rating: 5,
      description: ''
    },
    {
      game: 'frogger',
      name: 'Frogger',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/frogger.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/frogger.png',
      rating: 5,
      description: ''
    },
    {
      game: 'galaga',
      name: 'Galaga',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/galaga.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/galaga.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'galaxian',
      name: 'Galaxian',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/galaxian.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/galaxian.png',
      rating: 4,
      description: ''
    },
    {
      game: 'gauntlet.zip',
      name: 'Gauntlet',
      emulator: 'retro',
      core: 'mame_libretro.dll',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/gauntletpreview.jpg',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/gauntlet.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'gt2k.zip',
      name: 'Golden Tee 2K',
      emulator: 'retro',
      core: 'mame_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/goldentee2kpreview.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/goldentee2k.png',
      rating: 5,
      description: ''
    },
    {
      game: 'indytemp',
      name: 'Indiana Jones',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/indianjones.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9812-title-Indiana-Jones-and-the-Temple-of-Doom.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'joust',
      name: 'Joust',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/joust.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/joust.png',
      rating: 5,
      description: ''
    },
    {
      game: 'kungfum',
      name: 'Kung-fu Master',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/kungfumaster.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9894-ingame-Kung-Fu-Master.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'marble',
      name: 'Marble Madness',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/marble.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/marble.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mpatrol',
      name: 'Moon Patrol',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mpatrol.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/mpatrol.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mwalk',
      name: 'Moonwalker',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mwalk.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/moonwalker.png',
      rating: 5,
      description: 'Finding an image for this game that wasn\'t an animated gif was hard.  There is just too much awesome to described here.'
    },
    {
      game: 'mspacman',
      name: 'Ms Pacman',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mspacman.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/mspacman.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'pacman',
      name: 'Pacman',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/pacman.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/pacman.png',
      rating: 5,
      description: ''
    },
    {
      game: 'paperboyr2',
      name: 'Paperboy',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/paperboy.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/paperboy.png',
      rating: 5,
      description: ''
    },
    {
      game: 'princeofpersia.zip',
      name: 'Prince Of Persia',
      emulator: 'retro',
      core: 'dosbox_core_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/princeofpersia.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/princeofpersia.png',
      rating: 5,
      description: ''
    },
    {
      game: 'rampage',
      name: 'Rampage',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/rampage.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/rampage.png',
      rating: 5,
      description: ''
    },
    {
      game: 'shinobi',
      name: 'Shinobi',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/shinobi.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/shinobi.png',
      rating: 5,
      description: ''
    },
    {
      game: 'spidman',
      name: 'Spiderman',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/spiderman.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10993-menu-Spider-Man-the-Videogame.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'splatter',
      name: 'Splatter House',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/splatterhouse.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10630-ingame-Splatter-House.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'spyhunt',
      name: 'Spy Hunter',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/spyhunter.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/spyhunt.png',
      rating: 5,
      description: ''
    },
    {
      game: 'sf2',
      name: 'Street Fighter 2',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/streetfighter2.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/sf2.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'ssridersubc',
      name: 'Sunset Riders',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/sunsetriders.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10674-ingame-Sunset-Riders.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'supermariobros.nes',
      name: 'Super Mario Bros',
      emulator: 'retro',
      core: 'nestopia_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariobrospreview.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariobros.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'supermariokart.smc',
      name: 'Super Mario Kart',
      emulator: 'retro',
      core: 'snes9x_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariokartpreview.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermariokart.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'supermarioworld.zip',
      name: 'Super Mario World',
      emulator: 'retro',
      core: 'snes9x_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermarioworlpreview.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/supermarioworld.png',
      rating: 5,
      description: ''
    },
    {
      game: 'superpunchout.smc',
      name: 'Super Punch Out!!',
      emulator: 'retro',
      core: 'snes9x_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/superpunchout.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/SuperPunchOut.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'tmnt',
      name: 'Teenage Mutant Ninja Turtles',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/tmnt.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10754-ingame-Teenage-Mutant-Ninja-Turtles.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'atetris',
      name: 'Tetris',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/tetris.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/games/tetris.png',
      rating: 1,
      description: ''
    },
    {
      game: 'simpsons2p2',
      name: 'The Simpsons',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/simpsons.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10529-ingame-Simpsons-The.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'trackfld',
      name: 'Track and Field',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/trckfld.gif',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/trackfld.png',
      rating: 5,
      description: ''
    },
    {
      game: 'zombies.smc',
      name: 'Ultimate Zombies Ate My Neighbors',
      emulator: 'retro',
      core: 'snes9x_libretro.dll',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/Zombiepreview.jpg',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/v1/ZombieAteMy02.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'zaxxon',
      name: 'Zaxxon',
      emulator: 'mame',
      preview: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/zaxxon.png',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/zaxxon.png',
      rating: 5,
      description: ''
    },
  ]
}

export default roms
