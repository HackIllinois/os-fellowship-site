import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';
import FAQ from './FAQ';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    <FAQ />
  </div>
);

export default Home;
