import React from 'react';

import HERO_WAVE from 'assets/home/hero/hero_wave.svg';
import LOGO from 'assets/home/hero/logo.svg';
import LOGO_MOBILE from 'assets/home/hero/logo_mobile.svg';

import styles from './styles.module.scss';

const Section1: React.FC = () => (
  <div className={styles.hero}>
    <img className={styles.logo} src={LOGO} alt="" />
    <img className={styles.logoMobile} src={LOGO_MOBILE} alt="" />
    <img className={styles.wave} src={HERO_WAVE} alt="" />

    <div className={styles.header}>
      <h4>HackIllinois presents</h4>
      <h1>Open Source</h1>
      <h1>Fellowship</h1>
      <h3>February 12 - March 4, 2021</h3>
      <a className={styles.applyButton} href="https://docs.google.com/forms/d/e/1FAIpQLSeCUg51ZyealgmuZygU7atgu8FduzI3WvNeKfiAxuiUHml6wQ/viewform?usp=sf_link">Apply Now</a>
    </div>
  </div>
);

export default Section1;
