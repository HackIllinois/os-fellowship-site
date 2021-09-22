import React from 'react';

import styles from './styles.module.scss';
import mentors from './mentors.json';

// sort mentors alphabetically by name
mentors.sort(({ name: n1 }, { name: n2 }) => n1.localeCompare(n2));

const Mentors = (): JSX.Element => (
  <div className={styles.mentors}>
    <h3 className={styles.title}>Mentors</h3>

    {mentors.map(({ name, projects, headshot, bio, github = {} }) => (
      <div className={styles.mentor}>
        <a
          className={styles.headshot}
          href={`https://github.com/${github}`}
          style={{ backgroundImage: `url("/mentor_photos/${headshot}")` }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.screenReaderOnly}>{`${name}'s GitHub profile`}</span>
        </a>

        <div>
          <h4 className={styles.name}>{name}</h4>
          {projects.map(({ name: projectName, link }) => (
            <a className={styles.project} href={link} target="_blank" rel="noopener noreferrer">{projectName}</a>
          ))}
          <p className={styles.bio} dangerouslySetInnerHTML={{ __html: bio }} />
        </div>
      </div>
    ))}
  </div>
);

export default Mentors;
