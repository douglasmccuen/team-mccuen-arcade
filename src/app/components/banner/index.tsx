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
    <div className={styles.Controls}>
      <IconButton icon="fa-bed" handleClick={onSleep} />
    </div>
    <h1>{name}</h1>
    <div className={[styles.Controls, styles.VolumeControls].join(' ')}>
      <IconButton icon={(isMuted)?'fa-volume-off':'fa-volume-mute'} handleClick={onMute} />
      <IconButton disabled={(volumeLevel <= 0)} icon="fa-volume-down" handleClick={onVolDown} />
      <span className={styles.VolumeLevel}>{volumeLevel}</span>
      <IconButton disabled={(volumeLevel >= 100)} icon="fa-volume-up" handleClick={onVolUp} />
    </div>
  </div>
)

export default Banner
