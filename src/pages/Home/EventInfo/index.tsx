import React from 'react';
import EVENT_WAVE from 'assets/home/event_info/event_wave.svg';
import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <div className={styles.eventInfo}>
    <img className={styles.wave} src={EVENT_WAVE} alt="" />

    <div className={styles.content}>
      <h1 className={styles.welcome}>Welcome to the Second HackIllinois Open Source Fellowship!</h1>
      <br />
      <br />
      <br />
      <h1>Our Vision</h1>
      <p>
        Open Source (OS) has been a central theme of HackIllinois for years. Historically, our annual
        flagship spring hackathon has provided students to work with OS mentors, but we believe that
        working on such a project is a long-term commitment. With that in mind, we at HackIllinois
        present to you the OS Fellowship, an 3-week long event that gives our attendees an exciting
        and engaging Hackathon experience while still maintaining our commitment to Open Source.
      </p>

      <h1>The Program</h1>
      <p>
        During the program, students will work in project groups mentored by professionals in Open
        Source to get familiar with and contribute to a large-scale open source project. As a participant,
        you’ll gain a valuable insight into a long-term development cycle as sought after industry experience,
        an appreciation of the community driving open source, and tons of development experience across a
        variety of tech stacks! Some of the OS projects from our previous fellowship, in January 2021, included
        Visual Studio Code, Julia, and pandas, among many others - see the complete list here!
      </p>
      <p>
        While each team will function independently, all teams and participants in Open Source fellowship will
        be a part of a shared slack workspace, where teams will be able to share progress, consult others for
        feedback, and gather data on their project as needed. In addition, weekly check-in meetings will allow teams
        to showcase their development over the week and learn about other projects and the direction they’re headed
        in—all to provide attendees with the most comprehensive dive into Open Source through HackIllinois.
      </p>
    </div>
  </div>
);

export default EventInfo;
