import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Todo.css'

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">

      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>

      <h2>TODO</h2>

      <div className={styles.todo}>
        <ul>
          <li>Make sure the app works with a joystick</li>

          <li>Test that I can install this app on the mini (and open games)</li>
          <li>Test remote management of the games (get the config working)</li>
          <li>Test remote updates of the app</li>

          <li>Make it look super cool</li>
          <li>Add other emulators (NES, SNES)</li>
        </ul>
      </div>
    </div>
  );
}
