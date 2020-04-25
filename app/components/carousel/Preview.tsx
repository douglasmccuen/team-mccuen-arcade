/* eslint jsx-a11y/click-events-have-key-events: off */
/* eslint jsx-a11y/no-static-element-interactions: off */
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
  jumpTo: () => void,
}

export default function Preview(props: Props) {
  const { isActive, preview, jumpTo } = props
  const style = {
    backgroundImage: `url(${preview})`
  }
  const css = [styles.Preview]
  if (isActive) css.push(styles.Active)
  return (
    <div className={css.join(' ')} style={style} onClick={jumpTo} />
  )
}
