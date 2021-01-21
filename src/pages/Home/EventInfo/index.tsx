import React from 'react';
import clsx from 'clsx';

import CAMPFIRE from 'assets/home/event_info/campfire.svg';
import CAMPFIRE_TABLET from 'assets/home/event_info/campfire_tablet.svg';
import CAMPFIRE_MOBILE from 'assets/home/event_info/campfire_mobile.svg';
import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <div className={styles.eventInfo}>
    <img className={clsx(styles.campfire, styles.desktop)} src={CAMPFIRE} alt="" />
    <img className={clsx(styles.campfire, styles.tablet)} src={CAMPFIRE_TABLET} alt="" />
    <img className={clsx(styles.campfire, styles.mobile)} src={CAMPFIRE_MOBILE} alt="" />

    <div className={styles.descriptionContainer}>
      <p className={styles.description}>
        Keeping in mind the virtual semester college students across the country are facing and
        the pivotal role we can play—now more than ever before—in bringing together a community of
        passionate developers and ideators, HackIllinois is announcing a brand new initiative in
        the form of Open Source Fellowship, held from February 12th - March 4th, 2021.
      </p>
    </div>

    <div className={styles.content}>
      <h1>Our Vision</h1>
      <p>
        With the many twists and turns brought about by the past year, we at HackIllinois were
        presented with the unique challenge of creating an event that’d continue to give our attendees
        an exciting and engaging Hackathon experience while still maintaining our commitment to
        Open Source.
      </p>

      <h1>The Program</h1>
      <p className={styles.bold}>
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
