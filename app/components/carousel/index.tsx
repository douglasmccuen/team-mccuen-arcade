/* eslint react/jsx-props-no-spreading: off */
/* eslint react/no-array-index-key: off */

import React from 'react'
import useCarousel from './useCarousel'
import games from '../../../configs/roms.config'
import styles from './Carousel.css'
import Game from './Game'
import Preview from './Preview'

type Props = {
  openGame: () => void;
  paused: bool;
};

const Carousel = (props: Props) => {
  const { openGame, paused } = props
  const { length } = games
  const onOpen = (idx) => {
    const rom = games[idx]
    openGame(rom.game)
  }
  const [active, handlers, style] = useCarousel(length, 5000, onOpen, paused)

  return (
    <div className={styles.Carousel}>
      <div className={styles.Content} {...handlers} style={style}>
        <div className={styles.Item}>
          <Game {...games[games.length - 3]} />
        </div>
        <div className={styles.Item}>
          <Game {...games[games.length - 2]} />
        </div>
        <div className={styles.Item}>
          <Game {...games[games.length - 1]} />
        </div>
        {games.map((game, key) => (
          <div className={styles.Item} key={key}>
            <Game {...game} isActive={active === key} />
          </div>
        ))}
        <div className={styles.Item}>
          <Game {...games[0]} />
        </div>
        <div className={styles.Item}>
          <Game {...games[1]} />
        </div>
        <div className={styles.Item}>
          <Game {...games[2]} />
        </div>
        <div className={styles.Item}>
          <Game {...games[3]} />
        </div>
        <div className={styles.Item}>
          <Game {...games[4]} />
        </div>
      </div>
      <ol className={styles.Indicators}>
        {games.map((_, key) => (
          <li key={key}>
            <Preview {...games[key]} isActive={active === key} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Carousel
