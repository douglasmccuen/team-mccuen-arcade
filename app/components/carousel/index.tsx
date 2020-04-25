/* eslint react/jsx-props-no-spreading: off */
/* eslint react/no-array-index-key: off */
/* eslint react/jsx-closing-bracket-location: off */
import React from 'react'
import useCarousel from './useCarousel'
import styles from './Carousel.css'
import Game from './game'
import Preview from './preview'
import { RomConfig } from '../../config/types'

type Props = {
  games: [RomConfig]
  openGame: (game: string) => void
  paused: boolean
  ref: object
}

const Carousel = React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
  const { openGame, paused, games } = props
  const { length } = games
  const onOpen = (idx:number) => {
    const rom = games[idx]
    openGame(rom.game)
  }
  const [active, handlers, style, isMoving, isSpinning, jumpTo, spinIt] =
    useCarousel(length, 5000, onOpen, paused)

  const cn = [styles.Carousel]
  if (isSpinning) cn.push(styles.Spinning)

  // the last 3 games in reverse order
  const g1 = games.slice(games.length-3).reverse()

  // the first 5 games
  const max = (games.length>=5) ? 5 : games.length
  const g3 = games.slice(0, max)

  return (length>0) ? (
    <div className={cn.join(' ')} {...handlers} ref={ref}>
      <div className={styles.Content} style={style}>
        {
          g1.map((g, i)=><div className={styles.Item} key={i}><Game {...g} /></div>)
        }
        {
          games.map((game, key) => (
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
          ))
        }
        {
          g3.map((g, i)=><div className={styles.Item} key={i}><Game {...g} /></div>)
        }
      </div>
      <ol className={styles.Indicators}>
        {games.map((g, i) => (
          <li key={i}>
            <Preview {...g} isActive={active === i} jumpTo={()=>{jumpTo(i)}} />
          </li>
        ))}
      </ol>
    </div>
  ) : <div />
})

Carousel.displayName = "Carousel"

export default Carousel
