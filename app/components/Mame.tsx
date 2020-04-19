import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Mame.css';
import routes from '../constants/routes.json';

type Props = {
  openGame: () => void;
  closeGame: () => void;
  isOpen: bool;
};

export default function Mame(props: Props) {
  const { openGame, closeGame, isOpen } = props;
  const text = isOpen ? 'Close' : 'Open';
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          data-tclass="btn"
          onClick={isOpen ? closeGame : openGame}
          type="button"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
