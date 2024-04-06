import { AccordionMenu } from '@/components/ui-components/AccordionMenu';
import { LABELS } from '@/constants';
import { MENU_FOOTER } from '@/constants/mokData';

import { BlockDescription } from './BlockInfo';
import { TableFooter } from './TableFooter';

import classes from './styles.scss';

export const Footer = () => (
  <footer className={`${classes.footer}`}>
    <div className={classes.container}>
      <BlockDescription />
      <div className={classes.footer_right}>
        <AccordionMenu menu={MENU_FOOTER} />
        <TableFooter menu={MENU_FOOTER} />
      </div>
    </div>
    <div className={classes.copyright}>
      <p>{LABELS.copyright}</p>
    </div>
  </footer>
);
