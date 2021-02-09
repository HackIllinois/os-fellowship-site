import React from 'react';

import BACKGROUND_BLOBS from 'assets/home/background_blobs.svg';

import Hero from './Hero';
import EventInfo from './EventInfo';
import FAQ from './FAQ';
import MentorsInfo from './MentorsInfo';
import Mentors from './Mentors';
import Timeline from './Timeline';
import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />

    {/* style inlined because otherwise the '0px' gets minified to '0', which breaks it */}
    <div className={styles.landscapeExtension} style={{ height: 'min(max(0px, calc((722px - 100vh)/10 + 65px)), 65px)' }} />

    <EventInfo />
    <FAQ />
    <MentorsInfo />

    <div className={styles.gradient}>
      <img className={styles.backgroundBlobs} src={BACKGROUND_BLOBS} alt="" />
      <Mentors />
      <Timeline />
    </div>
  </div>
);

export default Home;
