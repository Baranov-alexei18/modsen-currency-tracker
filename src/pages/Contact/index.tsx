import React from 'react';
import { useSelector } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { GITHUB_LINK, MODSEN_LINK, THEME_DARK } from '@/constants';
import { RootState } from '@/store/store';

import { CONTACTS } from './options';

import classes from './styles.scss';

const ContactPage = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`${classes.wrapper} ${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
      <h1>Contact Us</h1>
      <h2>Social network:</h2>
      <div className={classes.social_icons}>
        {CONTACTS.map(({ Icon, description, link }) => (
          <a
            key={description}
            href={link}
            className={classes.info__item}
            aria-hidden
          >
            <Icon height="40px" width="40px" />
          </a>
        ))}
      </div>

      <p className={classes.copyright}>
        Link by project:
        <a href={GITHUB_LINK}>
          Github - Alexei Baranov
        </a>
      </p>
      <p className={classes.copyright}>
        Provided a layout for project:
        <a href={MODSEN_LINK}>
          Modsen
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
