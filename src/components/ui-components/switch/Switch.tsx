/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import styles from './styles.scss';

export function Switch() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={styles.switch}>
      <label htmlFor="switch" className={styles.switch_label}>
        <input id="switch" type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className={styles.slider} />
      </label>
    </div>
  );
}
