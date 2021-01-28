import React from 'react';

import FIRE_STICK from 'assets/home/timeline/fire_stick.svg';
import ROCKS from 'assets/home/timeline/rocks.svg';
import STICKS from 'assets/home/timeline/sticks.svg';
import CAMPFIRE from 'assets/home/timeline/campfire.svg';
import SMOKE from 'assets/home/timeline/smoke.svg';

import styles from './styles.module.scss';
import timeline from './timeline.json';

const decorations = [FIRE_STICK, ROCKS, STICKS, CAMPFIRE];

const Timeline = (): JSX.Element => (
  <div className={styles.timeline}>
    <h2>TIMELINE</h2>

    <div className={styles.container}>
      <div className={styles.decorations}>
        <img className={styles.fireStick} src={FIRE_STICK} alt="" />
        <img className={styles.rocks} src={ROCKS} alt="" />
        <img className={styles.sticks} src={STICKS} alt="" />
        <img className={styles.campfire} src={CAMPFIRE} alt="" />
        <img className={styles.smoke} src={SMOKE} alt="" />
      </div>

      <div className={styles.content}>
        {timeline.map(({ title, text }) => (
          <div className={styles.timePoint}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className={styles.mobileContent}>
        {timeline.map(({ title, text }, i) => (
          <div className={styles.timePoint}>
            <img className={styles.decoration} src={decorations[i]} alt="" />
            <div className={styles.text}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Timeline;
