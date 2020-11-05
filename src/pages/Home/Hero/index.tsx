import React from 'react';

import STARS from 'assets/home/hero/stars.svg';
import BOTTOM_LANDSCAPE from 'assets/home/hero/bottom_landscape.svg';
import MOUNTAINS from 'assets/home/hero/mountains.svg';
import LEFT_TREES from 'assets/home/hero/left_trees.svg';
import RIGHT_TREES from 'assets/home/hero/right_trees.svg';
import WIND from 'assets/home/hero/wind.svg';
import CAMPERS from 'assets/home/hero/campers.svg';
import LOGO from 'assets/home/hero/logo.svg';
import MOON_REFLECTION from 'assets/home/hero/moon_reflection.svg';
import MOBILE_TREES from 'assets/home/hero/mobile_trees.svg';
import LOGO_MOBILE from 'assets/home/hero/logo_mobile.svg';

import styles from './styles.module.scss';

const Section1: React.FC = () => (
  <div className={styles.hero}>
    <div className={styles.stars} style={{ backgroundImage: `url(${STARS})` }} />
    <div className={styles.moon} />
    <div className={styles.bottomLandscape} style={{ backgroundImage: `url(${BOTTOM_LANDSCAPE})` }} />
    <div className={styles.mountains} style={{ backgroundImage: `url(${MOUNTAINS})` }} />
    <div className={styles.water} />
    <div className={styles.leftTrees} style={{ backgroundImage: `url(${LEFT_TREES})` }} />
    <div className={styles.rightTrees} style={{ backgroundImage: `url(${RIGHT_TREES})` }} />
    <div className={styles.wind} style={{ backgroundImage: `url(${WIND})` }} />
    <div className={styles.campers} style={{ backgroundImage: `url(${CAMPERS})` }} />
    <div className={styles.logo} style={{ backgroundImage: `url(${LOGO})` }} />
    <div className={styles.landingText}>REKINDLING CONNECTIONS</div>
    <div className={styles.moonReflection} style={{ backgroundImage: `url(${MOON_REFLECTION})` }} />
    <div className={styles.mobileTrees} style={{ backgroundImage: `url(${MOBILE_TREES})` }} />
    <div className={styles.logoMobile} style={{ backgroundImage: `url(${LOGO_MOBILE})` }} />
  </div>
);

export default Section1;
