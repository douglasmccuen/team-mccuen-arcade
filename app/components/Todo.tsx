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

          <li><b>Install and Config</b></li>
          <ul>
            <li>install this app on the mini</li>
            <li>the config should be an external file</li>
            <li>remote updates?</li>
          </ul>

          <li><b>Make it look super cool</b></li>
          <ul>
            <li>make carousel look big in middle</li>
            <li>add cool title bar</li>
            <li>add cool bg images</li>
            <li>add cool icon</li>
          </ul>

          <li><b>Add other emulators</b></li>
          <ul>
            <li>NES</li>
            <li>SNES</li>
          </ul>

          <li><b>Add cool features</b></li>
          <ul>
            <li>spin the carousel for a random game</li>
            <li>volume control</li>
          </ul>

        </ul>
      </div>
    </div>
  );
}
