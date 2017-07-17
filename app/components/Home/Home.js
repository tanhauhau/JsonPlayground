// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import DataSpace from '../DataSpace';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.leftContainer}>
          <DataSpace />
        </div>
        <div className={styles.rightContainer}>
        </div>
      </div>
    );
  }
}
