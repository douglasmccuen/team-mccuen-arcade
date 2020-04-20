/* eslint react/jsx-props-no-spreading: off */
/* eslint react/no-array-index-key: off */

import React from 'react'
import useCarousel from './useCarousel'
import games from '../../../configs/roms.config'
import styles from './Carousel.css'
import Game from './Game'

const Carousel = () => {

  const { length } = games
  const [active, style] = useCarousel(length, 5000)

  // TODO add the joystick handlers here...
  const handlers = {}

  return length > 0 && (
    <div className={styles.Carousel}>
      <ol className={styles.Indicators}>
        {games.map((_, key) => (
          <li
            key={key}
            className={`${active === key ? styles.Active : ""}`}
          />
        ))}
      </ol>
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
    </div>
    )
}

export default Carousel
