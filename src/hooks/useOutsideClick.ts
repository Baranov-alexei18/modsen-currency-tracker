import { RefObject, useEffect } from 'react';

import classes from './styles.scss';

export function useOutsideClick(
  elementRef: RefObject<HTMLElement>,
  handler: () => void,
  attached = true,
) {
  useEffect(() => {
    if (!attached) return;
    document.body.classList.add(classes.modal_open);

    const handleCloseSidebar = ({ target }: MouseEvent) => {
      document.addEventListener('click', handleCloseSidebar, true);
      if (!elementRef.current) return;

      if (!elementRef.current.contains(target as Node)) {
        handler();
      }
    };

    return () => {
      document.body.classList.remove(classes.modal_open);
      document.removeEventListener('click', handleCloseSidebar, true);
    };
  }, [elementRef, handler, attached]);
}
