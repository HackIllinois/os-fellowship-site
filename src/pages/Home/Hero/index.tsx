import React from 'react';

import TOP_STARS from 'assets/home/hero/top_stars.svg';
import CENTER_STARS from 'assets/home/hero/center_stars.svg';
import BOTTOM_LANDSCAPE from 'assets/home/hero/bottom_landscape.svg';
import LEFT_TREES from 'assets/home/hero/left_trees.svg';
import RIGHT_TREES from 'assets/home/hero/right_trees.svg';
import MOON from 'assets/home/hero/moon.svg';
import WAVE1 from 'assets/home/hero/wave1.svg';
import WAVE2 from 'assets/home/hero/wave2.svg';
import LOGO from 'assets/home/hero/logo.svg';

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
    <img className={styles.bottomLandscape} src={BOTTOM_LANDSCAPE} alt="" />
    <img className={styles.logo} src={LOGO} alt="" />

    <div className={styles.header}>
      <h1>Open Source</h1>
      <h1>Hackathon</h1>
      <h3>February 15 - March 5, 2021</h3>
      <a className={styles.applyButton} href="/">Apply Now</a>
    </div>

    <p className={styles.description}>
      Keeping in mind the virtual semester college students across the country are facing and
      the pivotal role we can play—now more than ever before—in bringing together a community of
      passionate developers and ideators, HackIllinois is announcing a brand new initiative in
      the form of Open Source Month, held from February 15th-March 5th, 2021.
    </p>
  </div>
);

export default Section1;
