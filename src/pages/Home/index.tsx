import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';
import FAQ from './FAQ';
import Timeline from './Timeline';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <div className={styles.landscapeExtension} />
    <EventInfo />
    <FAQ />
    <Timeline />
  </div>
);

export default Home;
