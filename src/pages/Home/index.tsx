import React from 'react';
import TIMELINE_WAVE from 'assets/home/timeline/timeline_wave.svg';

import Hero from './Hero';
import EventInfo from './EventInfo';
import FAQ from './FAQ';
// import MentorsInfo from './MentorsInfo';
import Mentors from './Mentors';
import Timeline from './Timeline';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />
    <EventInfo />
    <FAQ />
    {/* <MentorsInfo /> */}

    <div className={styles.gradient}>
      <Mentors />
      <Timeline />
      <img className={styles.wave} src={TIMELINE_WAVE} alt="" />
    </div>
  </div>
);

export default Home;
