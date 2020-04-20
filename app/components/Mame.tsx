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
    <div className={styles.Content}>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
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
      <div className={styles.Carousel}>
        <Carousel />
      </div>
    </div>
  );
}
