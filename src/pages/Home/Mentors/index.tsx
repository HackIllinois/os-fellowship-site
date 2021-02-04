import React from 'react';

import STARS from 'assets/home/mentors/stars.svg';
import TELESCOPE from 'assets/home/mentors/telescope.svg';
import styles from './styles.module.scss';

const Mentors = (): JSX.Element => (
  <div className={styles.mentors}>
    <img className={styles.stars} src={STARS} alt="" />

    <img className={styles.telescope} src={TELESCOPE} alt="" />

    <div className={styles.content}>
      <h1>Mentors</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus nisi, egestas egestas habitasse tortor,
        quis sit. Pellentesque a consequat, nibh fermentum dis eget pellentesque arcu, eget. Bibendum ullamcorper eget sit elit
        egestas enim, sed eu elit. Nec egestas quam feugiat vulputate molestie. Nullam in imperdiet sem sed. Ullamcorper massa,
        enim orci iaculis amet dui. In amet, dolor purus non dignissim.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus nisi, egestas egestas habitasse tortor,
        quis sit. Pellentesque a consequat, nibh fermentum dis eget pellentesque arcu, eget. Bibendum ullamcorper eget sit elit
        egestas enim, sed eu elit. Nec egestas quam feugiat vulputate molestie. Nullam in imperdiet sem sed. Ullamcorper massa,
        enim orci iaculis amet dui. In amet, dolor purus non dignissim.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus nisi, egestas egestas habitasse tortor,
        quis sit. Pellentesque a consequat, nibh fermentum dis eget pellentesque arcu, eget. Bibendum ullamcorper eget sit elit
        egestas enim, sed eu elit. Nec egestas quam feugiat vulputate molestie. Nullam in imperdiet sem sed. Ullamcorper massa,
        enim orci iaculis amet dui. In amet, dolor purus non dignissim.
      </p>
    </div>
  </div>
);

export default Mentors;
