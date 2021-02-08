import React from 'react';

import Hero from './Hero';
import EventInfo from './EventInfo';
import FAQ from './FAQ';
import Timeline from './Timeline';
import Mentors from './Mentors';

import styles from './styles.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Hero />

    {/* style inlined because otherwise the '0px' gets minified to '0', which breaks it */}
    <div className={styles.landscapeExtension} style={{ height: 'min(max(0px, calc((722px - 100vh)/10 + 65px)), 65px)' }} />

    <EventInfo />
    <FAQ />
    <Mentors />
    <Timeline />
  </div>
);

export default Home;
