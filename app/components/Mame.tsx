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
  const { openGame, isOpen } = props;
  return (
    <div className={styles.Content}>
      <div className={styles.Carousel}>
        <Carousel openGame={openGame} paused={isOpen} />
      </div>
      <div className={styles.Link}>
        <Link to={routes.TODO}>Todo List</Link>
      </div>
    </div>
  );
}
