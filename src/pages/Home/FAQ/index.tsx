import React from 'react';
import FAQ_WAVE from 'assets/home/faq/faq_wave.svg';
import styles from './styles.module.scss';

const FAQ = (): JSX.Element => {
  return (
    <div className={styles.faq}>
      <div className={styles.content}>
        <h1>FAQ</h1>
        <br />
        <br />

        <h4>What is the Open Source Fellowship?</h4>
        <p>
          Open Source Fellowship is a HackIllinois initiative whereby students work in small project
          groups led by Open Source professionals to contribute to a large-scale open source project.
        </p>

        <h4>How does it work?</h4>
        <p>
          Each team will work independently on its project throughout the course of the Open Source Fellowship.
          Mentors will assign tasks, meet with group members, and hold development meetings where team members will
          be able to share and make progress on what they’re working on. In addition to this, all participants in
          Open Source Fellowship will be a part of a shared slack workspace, where groups will be able to share progress
          and gather feedback on specific features from a larger group.
        </p>

        <h4>When is the Open Source Fellowship?</h4>
        <p>
          Open Source Fellowship will kick off on September 30th, 2021 and conclude on October 21st, 2021.
        </p>

        <h4>Who can participate in the Open Source Fellowship?</h4>
        <p>
          Open Source Fellowship is open to any college student regardless of experience level! We are searching for candidates
          who are passionate about open source, working in teams, and contributing to and maintaining projects that’ll go on to
          be used by many.
        </p>

        <h4>Who will students be paired with?</h4>
        <p>
          At previous HackIllinois events, we have had an incredible set of open source mentors from industry mentoring students.
          These mentors have been invited to help students continue to grow their open source skills through our mentorship program.
          You can check out our mentors on our website soon!
        </p>
      </div>
      <img className={styles.wave} src={FAQ_WAVE} alt="" />
    </div>
  );
};

export default FAQ;
