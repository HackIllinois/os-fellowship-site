import React, { useEffect, useRef } from 'react';
import { debounce, clamp } from 'lodash-es';
import lottie, { AnimationItem } from 'lottie-web';

import BLOB from 'assets/home/faq/blob.svg';
import styles from './styles.module.scss';
import animationData from './data.json';

const setupScrollAnimation = (animation: AnimationItem, container: HTMLElement) => {
  const calculateScrollPositions = () => {
    const fullyVisibleDistance = window.innerHeight - container.offsetHeight;
    const offsetTop = container.getBoundingClientRect().top + window.scrollY;
    return {
      // we want to start animation when the bottom 20% of it is still hidden (the rest is visible)
      startY: offsetTop - fullyVisibleDistance - (0.2 * container.offsetHeight),
      endY: offsetTop - 5,
    };
  };

  let { startY, endY } = calculateScrollPositions();

  const scroll = () => {
    const numFrames = animation.totalFrames;
    const percentage = clamp((window.scrollY - startY) / (endY - startY), 0.01, 1);
    const frame = numFrames - (percentage * numFrames); // `numFrames -` since we want the animation to go the other way
    animation.goToAndStop(frame, true);
  };

  scroll();

  window.addEventListener('resize', debounce(() => {
    ({ startY, endY } = calculateScrollPositions());
    scroll();
  }, 150));
  document.addEventListener('scroll', scroll);
};

const FAQ = (): JSX.Element => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.destroy();

    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
      });

      animation.addEventListener('DOMLoaded', () => {
        const svgElement = animationContainer.current?.querySelector('svg');
        if (svgElement) {
          svgElement.setAttribute('viewBox', '48 57 435 580');
        }
      });

      setupScrollAnimation(animation, animationContainer.current);
    }
  }, []);

  return (
    <div className={styles.faq}>
      <img className={styles.blob} src={BLOB} alt="" />

      <div className={styles.cup} ref={animationContainer} />

      <div className={styles.content}>
        <h1>FAQ</h1>

        <h4>What is the Open Source Fellowship?</h4>
        <p>
          Open Source Fellowship is a new HackIllinois initiative whereby students work
          in small project groups led by Open Source professionals to contribute to a
          large-scale open source project.
        </p>

        <h4>How does it work?</h4>
        <p>
          Each team will work independently on its project throughout the course of the
          Open Source Fellowship. Mentors will assign tasks, meet with group members, and
          hold development meetings where team members will be able to share and make progress
          on what they’re working on. In addition to this, all participants in Open Source
          Fellowship will be a part of a shared slack workspace, where groups will be able
          to share progress and gather feedback on specific features from a larger group.
        </p>

        <h4>When is the Open Source Fellowship?</h4>
        <p>
          Open Source Fellowship will kick off on February 12th, 2021, and conclude on March 4th, 2021.
        </p>

        <h4>Who can participate in the Open Source Fellowship?</h4>
        <p>
          Open Source Month is open to any college student regardless of experience level!
          We are searching for candidates who are passionate about open source, working in
          teams, and contributing to and maintaining projects that’ll go on to be used by many.
        </p>

        <h4>Who will students be paired with?</h4>
        <p>
          At previous HackIllinois events, we have had an incredible set of open source mentors
          from industry mentoring students. This year, our mentors have been invited to help
          students continue to grow their open source skills through our mentorship program!
          You can check out our mentors on our website soon!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
