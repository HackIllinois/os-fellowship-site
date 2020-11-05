import React from 'react';

import LANDSCAPE_CONT from 'assets/home/event_info/landscape_continued.svg';
import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <div className={styles.home}>
    <div className={styles.bottomLandscape} style={{ backgroundImage: `url(${LANDSCAPE_CONT})` }} />
  </div>
);

export default EventInfo;
