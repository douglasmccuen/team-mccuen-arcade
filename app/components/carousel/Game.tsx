import React from 'react'
import styles from './Game.css'

type Props = {
  name: string;
  game: string;
  emulator: string;
  image: string;
  description: string;
  rating: number;
  isActive: bool
};

export default function Game(props: Props) {
  const { name, isActive, image, description } = props;
  const css = [styles.Game]
  if (isActive) css.push(styles.Active)
  return (
    <div className={css.join(' ')}>
      <div className={styles.Image}><img src={image} alt={name} /></div>
      <div className={styles.Name}>{ name }</div>
      <div className={styles.Desc}>{ description }</div>
    </div>
  )
}
