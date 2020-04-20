import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Mame.css'
import routes from '../constants/routes.json'
import Carousel from './carousel'

type Props = {
  openGame: () => void;
  closeGame: () => void;
  isOpen: bool;
};

export default function Mame(props: Props) {
  const { openGame, closeGame, isOpen } = props;
  const text = isOpen ? 'Close Mame' : 'Open Mame';
  const onOpen = () => {
    openGame("dkong")
  }
  const onClose = () => {
    closeGame(true)
  }
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={styles.todo}>
        <h2>TODO List</h2>
        <ul>
          <li>A carousel of games, that can read the list of data from a json file.</li>
          <li>Make sure the app works with a joystick</li>
          <li>Test that I can install this app on the mini (and open games)</li>
          <li>Test remote management of the games (get the config working)</li>
          <li>Test remote updates of the app</li>
          <li>Make it look super cool</li>
          <li>Add other emulators (NES, SNES)</li>
        </ul>
      </div>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          data-tclass="btn"
          onClick={isOpen ? onClose : onOpen}
          type="button"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
