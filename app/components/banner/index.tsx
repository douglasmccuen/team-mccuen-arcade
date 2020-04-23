/* eslint jsx-a11y/control-has-associated-label: off */
import React from 'react'
import styles from './Banner.css'


type Props = {
  name: string
}

const Banner = ({ name }: Props) => (
  <div className={styles.Banner}>
    <div className={styles.Sleep}>
      <button type="button"><i className="fa fa-bed fa-3x" /></button>
      <button type="button"><i className="fa fa-volume-mute fa-3x" /></button>
    </div>
    <h1>{name}</h1>
    <div className={styles.Audio}>
      <button type="button"><i className="fa fa-volume-down fa-3x" /></button>
      <button type="button"><i className="fa fa-volume-up fa-3x" /></button>
    </div>
  </div>
)

export default Banner
