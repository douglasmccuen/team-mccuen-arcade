const roms = {
  roms: [
    {
      game: 'alpinerd',
      name: 'Alpine Racer',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/alpineracer.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'btimem',
      name: 'Burger Time',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/burgertime.png',
      rating: 5,
      description: ''
    },
    {
      game: 'cninja',
      name: 'Caveman Ninja',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/cninja.png',
      rating: 5,
      description: ''
    },
    {
      game: 'centiped',
      name: 'Centipede',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/centepede.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'crusnusa',
      name: "Cruis'n USA",
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/cruisinusa.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'digdug',
      name: 'Dig Dug',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/digdug.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'dkong',
      name: 'Donkey Kong',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/dkong.png',
      rating: 5,
      description: 'Dad\'s favorite game of all time...'
    },
    {
      game: 'frogger',
      name: 'Frogger',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/frogger.png',
      rating: 5,
      description: ''
    },
    {
      game: 'galaga',
      name: 'Galaga',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/galaga.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'atetris',
      name: 'Tetris',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/tetris.jpg',
      rating: 1,
      description: ''
    },
    {
      game: 'defenderb',
      name: 'Defender',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/defender.png',
      rating: 3,
      description: ''
    },
    {
      game: 'galaxian',
      name: 'Galaxian',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/galaxian.png',
      rating: 4,
      description: ''
    },
    {
      game: 'kungfum',
      name: 'Kung-fu Master',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/kungfumaster.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'marble',
      name: 'Marble Madness',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/marble.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mpatrol',
      name: 'Moon Patrol',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mpatrol.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mspacman',
      name: 'Ms Pacman',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mspacman.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'pacman',
      name: 'Pacman',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/pacman.gif',
      rating: 5,
      description: ''
    },
    {
      game: 'paperboyr2',
      name: 'Paperboy',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/paperboy.png',
      rating: 5,
      description: ''
    },
    {
      game: 'rampage',
      name: 'Rampage',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/rampage.png',
      rating: 5,
      description: ''
    },
    {
      game: 'sf2',
      name: 'Street Fighter 2',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/streetfighter2.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'shinobi',
      name: 'Shinobi',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/shinobi.png',
      rating: 5,
      description: ''
    },
    {
      game: 'simpsons2p2',
      name: 'The Simpsons',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/simpsons.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'excitebk',
      name: 'Excite Bike',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/excitbkj.png',
      rating: 5,
      description: ''
    },
    {
      game: 'indytemp',
      name: 'Indiana Jones',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/indianjones.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'joust',
      name: 'Joust',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/joust.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'mwalk',
      name: 'Moonwalker',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/mwalk.png',
      rating: 5,
      description: ''
    },
    {
      game: 'spidman',
      name: 'Spiderman',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/spiderman.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'splatter',
      name: 'Splatter House',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/splatterhouse.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'spyhunt',
      name: 'Spy Hunter',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/spyhunter.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'ssridersubc',
      name: 'Sunset Riders',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/sunsetriders.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'tmnt',
      name: 'Teenage Mutant Ninja Turtles',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/tmnt.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'trackfld',
      name: 'Track and Field',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/trckfld.gif',
      rating: 5,
      description: ''
    },
    {
      game: 'zaxxon',
      name: 'Zaxxon',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/better/zaxxon.png',
      rating: 5,
      description: ''
    },
  ]
}

export default roms
