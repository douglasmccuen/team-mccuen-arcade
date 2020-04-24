import React from 'react'
import IconButton from './Button'
import styles from './Banner.css'

type Props = {
  name: string
  onSleep: () => void
  onMute: () => void
  onVolUp: () => void
  onVolDown: () => void
  isMuted: boolean
  volumeLevel: number
}

const Banner = ({ name, onSleep, onMute, onVolUp, onVolDown, isMuted, volumeLevel }: Props) => (
  <div className={styles.Banner}>
    <div>
      <IconButton icon="fa-bed" handleClick={onSleep} />
      <IconButton icon={(isMuted)?'fa-volume-off':'fa-volume-mute'} handleClick={onMute} />
    </div>
    <h1>{name}</h1>
    <div>
      <IconButton disabled={(volumeLevel <= 0)} icon="fa-volume-down" handleClick={onVolDown} />
      <IconButton disabled={(volumeLevel >= 100)} icon="fa-volume-up" handleClick={onVolUp} />
    </div>
  </div>
)

export default Banner
