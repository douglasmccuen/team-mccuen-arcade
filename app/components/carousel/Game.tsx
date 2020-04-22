import React from 'react'
import styles from './Game.css'

type Props = {
  name: string
  game: string
  emulator: string
  image: string
  description: string
  rating: number
  isActive: bool
  isPreActive: bool
  isPrePreActive: bool
  isPostActive: bool
  isPostPostActive: bool
  isMoving: bool
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

  return (
    <div className={css.join(' ')}>
      <div className={styles.Image}><img src={image} alt={name} /></div>
      <div className={styles.Name}>{ name }</div>
      <div className={styles.Desc}>{ description }</div>
    </div>
  )
}
