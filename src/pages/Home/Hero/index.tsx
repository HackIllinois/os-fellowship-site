import React from 'react';
import clsx from 'clsx';

import TOP_STARS from 'assets/home/hero/top_stars.svg';
import CENTER_STARS from 'assets/home/hero/center_stars.svg';
import BOTTOM_LANDSCAPE from 'assets/home/hero/bottom_landscape.svg';
import LEFT_TREES from 'assets/home/hero/left_trees.svg';
import RIGHT_TREES from 'assets/home/hero/right_trees.svg';
import RIGHT_TREES_FULL from 'assets/home/hero/right_trees_full.svg';
import MOON from 'assets/home/hero/moon.svg';
import WAVE1 from 'assets/home/hero/wave1.svg';
import WAVE2 from 'assets/home/hero/wave2.svg';
import LOGO from 'assets/home/hero/logo.svg';
import LOGO_MOBILE from 'assets/home/hero/logo_mobile.svg';

import styles from './styles.module.scss';

const Section1: React.FC = () => (
  <div className={styles.hero}>
    <img className={styles.wave1} src={WAVE1} alt="" />
    <img className={styles.wave2} src={WAVE2} alt="" />
    <div className={styles.topStars} style={{ backgroundImage: `url(${TOP_STARS})` }} />
    <img className={styles.centerStars} src={CENTER_STARS} alt="" />
    <img className={styles.moon} src={MOON} alt="" />
    <img className={styles.leftTrees} src={LEFT_TREES} alt="" />
    <img className={styles.rightTrees} src={RIGHT_TREES} alt="" />
    <img className={clsx(styles.rightTrees, styles.full)} src={RIGHT_TREES_FULL} alt="" />
    <img className={styles.bottomLandscape} src={BOTTOM_LANDSCAPE} alt="" />
    <img className={styles.logo} src={LOGO} alt="" />
    <img className={styles.logoMobile} src={LOGO_MOBILE} alt="" />

    <div className={styles.header}>
      <h4>HackIllinois presents</h4>
      <h1>Open Source</h1>
      <h1>Fellowship</h1>
      <h3>February 15 - March 5, 2021</h3>
      <a className={styles.applyButton} href="https://docs.google.com/forms/d/e/1FAIpQLSeCUg51ZyealgmuZygU7atgu8FduzI3WvNeKfiAxuiUHml6wQ/viewform?usp=sf_link">Apply Now</a>
    </div>

    <p className={styles.description}>
      Keeping in mind the virtual semester college students across the country are facing and
      the pivotal role we can play—now more than ever before—in bringing together a community of
      passionate developers and ideators, HackIllinois is announcing a brand new initiative in
      the form of Open Source Fellowship, held from February 15th-March 5th, 2021.
    </p>
  </div>
);

export default Section1;
