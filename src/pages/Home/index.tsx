import React from 'react';
import clsx from 'clsx';

import BACKGROUND_BLOBS from 'assets/home/background_blobs.svg';
import BACKGROUND_BLOBS_TABLET from 'assets/home/background_blobs_tablet.svg';
import LANTERN from 'assets/home/lantern.svg';

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
      <img className={clsx(styles.backgroundBlobs, styles.tablet)} src={BACKGROUND_BLOBS_TABLET} alt="" />
      <img className={styles.lantern} src={LANTERN} alt="" />
      <Mentors />
      <Timeline />
    </div>
  </div>
);

export default Home;
