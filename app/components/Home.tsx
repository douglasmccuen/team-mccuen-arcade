import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <div>
        <Link to={routes.MAME}>to Mame</Link>
      </div>
      <div className={styles.todo}>
        <h3>TODO List</h3>
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
    </div>
  );
}
