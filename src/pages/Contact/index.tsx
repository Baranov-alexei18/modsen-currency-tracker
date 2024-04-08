import React from 'react';

import { CONTACT_LINKS, CONTACTS } from '@/constants/contact';

import classes from './styles.scss';

const ContactPage = () => (
  <div className={`${classes.wrapper}`}>
    <h1>Contact Us</h1>
    <h2>Social network:</h2>
    <div className={classes.social_icons}>
      {CONTACTS.map(({ iconSvg, description, link }) => (
        <a
          key={description}
          href={link}
          className={classes.info__item}
          aria-hidden
        >
          <img height="40px" width="40px" src={iconSvg} alt={description} title={link} />
        </a>
      ))}
    </div>

    <p className={classes.copyright}>
      Link by project:
      <a href={CONTACT_LINKS.GITHUB_LINK}>
        Github - Alexei Baranov
      </a>
    </p>
    <p className={classes.copyright}>
      Provided a layout for project:
      <a href={CONTACT_LINKS.MODSEN_LINK}>
        Modsen
      </a>
    </p>
  </div>
);

export default ContactPage;
