import React from 'react';

import styles from './styles.module.scss';
import mentors from './mentors.json';

// sort mentors alphabetically by name
mentors.sort(({ name: n1 }, { name: n2 }) => n1.localeCompare(n2));

const Mentors = (): JSX.Element => (
  <div className={styles.mentors}>
    <h3 className={styles.title}>Mentors</h3>

    {mentors.map(({ name, projects, headshot, bio, github, headshotStyles = {} }) => (
      <div className={styles.mentor}>
        <a
          className={styles.headshot}
          href={`https://github.com/${github}`}
          style={{ backgroundImage: `url("/mentor_photos/${headshot}")`, ...headshotStyles }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.screenReaderOnly}>{`${name}'s GitHub profile`}</span>
        </a>

        <div>
          <h4 className={styles.name}>{name}</h4>
          {projects.map((project) => (
            <a className={styles.project} href={project} target="_blank" rel="noopener noreferrer">{project}</a>
          ))}
          <p className={styles.bio}>{bio}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Mentors;
