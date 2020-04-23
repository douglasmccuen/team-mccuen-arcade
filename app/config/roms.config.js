const roms = {
  roms: [
    {
      game: 'alpinerd',
      name: 'Alpine Racer',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/22298-ingame-Alpine-Racer.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'btimem',
      name: 'Burger Time',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/BTIME.png',
      rating: 5,
      description: ''
    },
    {
      game: 'cninja',
      name: 'Caveman Ninja',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/cninja.png',
      rating: 5,
      description: ''
    },
    {
      game: 'centiped',
      name: 'Centipede',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/centiped.png',
      rating: 5,
      description: ''
    },
    {
      game: 'crusnusa',
      name: "Cruis'n USA",
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/15633-ingame-Cruisn-USA.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'digdug',
      name: 'Dig Dug',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9512-ingame-Dig-Dug.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'dkong',
      name: 'Donkey Kong',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/dkong.png',
      rating: 5,
      description: 'Dad\'s favorite game of all time...'
    },
    {
      game: 'frogger',
      name: 'Frogger',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/frogger.png',
      rating: 5,
      description: ''
    },
    {
      game: 'galaga',
      name: 'Galaga',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/galaga.png',
      rating: 5,
      description: ''
    },
    {
      game: 'atetris',
      name: 'Tetris',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10899-ingame-Vs-Tetris.jpg',
      rating: 1,
      description: ''
    },
    {
      game: 'defenderb',
      name: 'Defender',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/defender.png',
      rating: 3,
      description: ''
    },
    {
      game: 'galaxian',
      name: 'Galaxian',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/galaxian.png',
      rating: 4,
      description: ''
    },
    {
      game: 'kungfum',
      name: 'Kung-fu Master',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9894-ingame-Kung-Fu-Master.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'marble',
      name: 'Marble Madness',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/marble.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mpatrol',
      name: 'Moon Patrol',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/mpatrol.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mspacman',
      name: 'Ms Pacman',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/11106-ingame-Ms-Pacman.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'pacman',
      name: 'Pacman',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/11178-ingame-Pacman.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'paperboyr2',
      name: 'Paperboy',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/paperboy.png',
      rating: 5,
      description: ''
    },
    {
      game: 'rampage',
      name: 'Rampage',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/rampage.png',
      rating: 5,
      description: ''
    },
    {
      game: 'sf2',
      name: 'Street Fighter 2',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/download.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'shinobi',
      name: 'Shinobi',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/shinobi.png',
      rating: 5,
      description: ''
    },
    {
      game: 'simpsons2p2',
      name: 'The Simpsons',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10529-ingame-Simpsons-The.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'excitebk',
      name: 'Excite Bike',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/excitbkj.png',
      rating: 5,
      description: ''
    },
    {
      game: 'indytemp',
      name: 'Indiana Jones',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/9812-title-Indiana-Jones-and-the-Temple-of-Doom.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'joust',
      name: 'Joust',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/joust.png',
      rating: 5,
      description: ''
    },
    {
      game: 'mwalk',
      name: 'Moonwalker',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/mwalk.png',
      rating: 5,
      description: ''
    },
    {
      game: 'spidman',
      name: 'Spiderman',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10993-menu-Spider-Man-the-Videogame.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'splatter',
      name: 'Splatter House',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10630-ingame-Splatter-House.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'spyhunt',
      name: 'Spy Hunter',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/spyhunt.png',
      rating: 5,
      description: ''
    },
    {
      game: 'ssridersubc',
      name: 'Sunset Riders',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10674-ingame-Sunset-Riders.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'tmnt',
      name: 'Teenage Mutant Ninja Turtles',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/10754-ingame-Teenage-Mutant-Ninja-Turtles.jpg',
      rating: 5,
      description: ''
    },
    {
      game: 'trackfld',
      name: 'Track and Field',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/trackfld.png',
      rating: 5,
      description: ''
    },
    {
      game: 'zaxxon',
      name: 'Zaxxon',
      emulator: 'mame',
      image: 'https://team-mccuen.s3-us-west-2.amazonaws.com/images/zaxxon.png',
      rating: 5,
      description: ''
    },
  ]
}

export default roms
