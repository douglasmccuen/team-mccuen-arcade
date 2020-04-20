import React from 'react'
import styles from './Preview.css'

type Props = {
  name: string;
  game: string;
  emulator: string;
  image: string;
  description: string;
  rating: number;
  isActive: bool
};

export default function Preview(props: Props) {
  const { isActive } = props;
  const css = [styles.Preview]
  if (isActive) css.push(styles.Active)
  return (
    <div className={css.join(' ')} />
  )
}
