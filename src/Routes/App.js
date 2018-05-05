import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './App.scss';

const App = () => (
  <React.Fragment>
    <p className={styles.title}>HELLO WEBPACK V4.7</p>
    <p className={styles.title}>HELLO WEBPACK V4.7</p>
    <p className={styles.title}>HELLO WEBPACK V4.7</p>
    <p className={styles.title}>HELLO WEBPACK V4.7</p>
    <p className={styles.title}>HELLO WEBPACK V4.7</p>
  </React.Fragment>
);

export default hot(module)(App);

