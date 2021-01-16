import React from 'react';

import LANDSCAPE_CONT from 'assets/home/event_info/landscape_continued.svg';
import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <div className={styles.eventInfo}>
    <img className={styles.landscapeContinued} src={LANDSCAPE_CONT} alt="" />

    <div className={styles.content}>
      <h1>Our Vision</h1>
      <p>
        With the many twists and turns brought about by the past year, we at HackIllinois were
        presented with the unique challenge of creating an event that’d continue to give our attendees
        an exciting and engaging Hackathon experience while still maintaining our commitment to
        Open Source.
      </p>

      <h1>The Program</h1>
      <p>
        Throughout the program, students will work in project groups mentored by professionals in
        Open Source to get familiar with and contribute to a large-scale open source project.&nbsp;
        <u>
          As a participant, you’ll gain a valuable insight into a long-term development cycle as sought
          after industry experience, an appreciation of the community driving open source, and tons of
          development experience across a variety of tech stacks!
        </u>
      </p>
      <p>
        While each team will function independently, all teams and participants in Open Source
        fellowship will be a part of a shared slack workspace, where teams will be able to share
        progress, consult others for feedback, and gather data on their project as needed. In
        addition, weekly check-in meetings will allow teams to showcase their development over the
        week and learn about other projects and the direction they’re headed in—all to provide
        attendees with the most comprehensive dive into Open Source through HackIllinois.
      </p>
    </div>
  </div>
);

export default EventInfo;
