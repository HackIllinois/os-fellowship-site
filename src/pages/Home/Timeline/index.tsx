import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

const Timeline = (): JSX.Element => (
  <div className={styles.timeline}>
    <h2 className={clsx(styles.title, styles.mobile)}>TIMELINE</h2>

    <div className={styles.container}>

      <div className={styles.content}>
        <h2 className={styles.title}>TIMELINE</h2>
        <p className={styles.text}>
          On Thursday, September 30th, students will have the opportunity to “tour” the various projects the Open Source Fellowship has to offer, learning more about the specific project requirements and speaking with mentors to answer any questions.
          <br />
          <br />
          At the end of the day, we’ll release a form allowing students to pick their top 3 project preferences. After this, we’ll preliminarily match students to project groups based on:
          <ul>
            <li>Skill level</li>
            <li>Overall project experience, particularly with the project’s tech stack</li>
            <li>Additional preferences and considerations from mentors</li>
          </ul>
          <br />
          Over the weekend of October 2nd and 3rd, any mentors who wish to interview students further to ensure the best fit for their project group will also get the chance to do so.
          <br />
          <br />
          Finally, with this feedback in account, we’ll release final project matches at the beginning of Monday, October 4th, officially kicking off the Fellowship Program.
        </p>
      </div>
    </div>
  </div>
);

export default Timeline;
