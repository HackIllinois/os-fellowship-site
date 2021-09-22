import React from 'react';
import GRADIENT_WAVE from 'assets/home/gradient/gradient_wave.svg';

import Hero from './Hero';
import EventInfo from './EventInfo';
import FAQ from './FAQ';
import Mentors from './Mentors';
import Timeline from './Timeline';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    <FAQ />

    <div className={styles.gradient}>
      <Mentors />
      <Timeline />
      <img className={styles.wave} src={GRADIENT_WAVE} alt="" />
    </div>
  </div>
);

export default Home;
