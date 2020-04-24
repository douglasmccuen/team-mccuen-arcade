import React from 'react'
import styles from './Preview.css'

type Props = {
  name: string
  game: string
  emulator: string
  image: string
  preview: string
  description: string
  rating: number
  isActive: boolean
}

export default function Preview(props: Props) {
  const { isActive, preview } = props
  const style = {
    backgroundImage: `url(${preview})`
  }
  const css = [styles.Preview]
  if (isActive) css.push(styles.Active)
  return (
    <div className={css.join(' ')} style={style} />
  )
}
