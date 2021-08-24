import React from 'react';

import HERO_WAVE from 'assets/home/hero/hero_wave.svg';
import LOGO from 'assets/home/hero/logo.svg';
import LOGO_MOBILE from 'assets/home/hero/logo_mobile.svg';

import styles from './styles.module.scss';

const Hero: React.FC = () => (
  <div className={styles.hero}>
    <img className={styles.logo} src={LOGO} alt="" />
    <img className={styles.logoMobile} src={LOGO_MOBILE} alt="" />
    <img className={styles.wave} src={HERO_WAVE} alt="" />

    <div className={styles.header}>
      <h4>HackIllinois presents</h4>
      <h1>Open Source</h1>
      <h1>Fellowship</h1>
      <h3>September 30 - October 21, 2021</h3>
      <a className={styles.applyButton} href="https://go.hackillinois.org/fellowship-application">Apply Now</a>
    </div>
  </div>
);

export default Hero;
