import themes from '@/assets/style/theme.scss';
import { copyright, menu } from '@/constants/index';

import { AccordionMenu } from '../ui-components/AccordionMenu';
import { BlockInfo } from './BlockInfo';
import classes from './styles.scss';
import { TableFooter } from './TableFooter';

export const Footer = () => {
  const theme = 'dark';
  return (
    <footer className={`${classes.footer} ${theme === 'dark' ? themes.theme_dark : themes.theme_light}`}>
      <div className={classes.container}>
        <BlockInfo />
        <div className={classes.footer_right}>
          <AccordionMenu menu={menu} />
          <TableFooter menu={menu} />
        </div>
      </div>
      <div className={classes.copyright}>
        <p>{copyright}</p>
      </div>
    </footer>
  );
};
