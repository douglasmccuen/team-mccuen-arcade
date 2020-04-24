import React from 'react'
import styles from './Game.css'

type Props = {
  name: string
  game: string
  emulator: string
  image: string
  description: string
  rating: number
  isActive: boolean
  isPreActive: boolean
  isPrePreActive: boolean
  isPostActive: boolean
  isPostPostActive: boolean
  isMoving: boolean
}

export default function Game(props: Props) {
  const {
    name, image, description, isActive, isPreActive, isPrePreActive,
    isPostActive, isPostPostActive, isMoving
  } = props

  const css = [styles.Game]
  if (isMoving) css.push(styles.isMoving)
  if (isActive) css.push(styles.Active)
  if (isPreActive) css.push(styles.PreActive)
  if (isPrePreActive) css.push(styles.PrePreActive)
  if (!isMoving && isPostActive) css.push(styles.PostActive)
  if (isPostPostActive) css.push(styles.PostPostActive)

  const style = {
    backgroundImage: `url(${image})`
  }

  return (
    <div className={css.join(' ')}>
      <div className={styles.Image} style={style} />
      <div className={styles.Name}>{ name }</div>
      <div className={styles.Desc}>{ description }</div>
    </div>
  )
}
