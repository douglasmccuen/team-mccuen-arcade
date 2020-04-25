/* eslint react/jsx-props-no-spreading: off */
/* eslint react/no-array-index-key: off */
/* eslint react/jsx-closing-bracket-location: off */
import React from 'react'
import useCarousel from './useCarousel'
import styles from './Carousel.css'
import Game from './Game'
import Preview from './Preview'

type Props = {
  games: []
  openGame: () => void
  paused: boolean
  ref: object
}

const Carousel = React.forwardRef((props: Props, ref) => {
  const { openGame, paused, games } = props
  const { length } = games
  const onOpen = (idx) => {
    const rom = games[idx]
    openGame(rom.game)
  }
  const [active, handlers, style, isMoving, isSpinning, jumpTo, spinIt] =
    useCarousel(length, 5000, onOpen, paused)

  const cn = [styles.Carousel]
  if (isSpinning) cn.push(styles.Spinning)

  return length>0 && (
    <div className={cn.join(' ')} {...handlers} ref={ref}>
      <div className={styles.Content} style={style}>
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
            <Game
              {...game}
              isMoving={isMoving}
              isSpinning={isSpinning}
              isPrePreActive={(active - key) === -2}
              isPreActive={(active - key) === -1}
              isActive={active === key}
              isPostActive={(active - key) === 1}
              isPostPostActive={(active - key) === 2}
              handleClick={spinIt} />
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
            <Preview
              {...games[key]}
              isActive={active === key}
              jumpTo={() => {jumpTo(key)}} />
          </li>
        ))}
      </ol>
    </div>
  )
})

Carousel.displayName = "Carousel"

export default Carousel
