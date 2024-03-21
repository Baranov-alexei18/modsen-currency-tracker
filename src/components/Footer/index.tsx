import { useSelector } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { AccordionMenu } from '@/components/ui-components/AccordionMenu';
import { THEME_DARK } from '@/constants';
import { copyright, menu } from '@/constants/index';
import { RootState } from '@/store/store';

import { BlockInfo } from './BlockInfo';
import classes from './styles.scss';
import { TableFooter } from './TableFooter';

export const Footer = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <footer className={`${classes.footer} ${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
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
