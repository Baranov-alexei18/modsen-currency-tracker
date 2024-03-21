import { RefObject, useEffect } from 'react';

export function useOutsideClick(
  elementRef: RefObject<HTMLElement>,
  handler: () => void,
  attached = true,
) {
  useEffect(() => {
    if (!attached) return;

    const handleCloseSidebar = ({ target }: MouseEvent) => {
      if (!elementRef.current) return;

      if (!elementRef.current.contains(target as Node)) {
        handler();
      }
    };
    document.addEventListener('click', handleCloseSidebar, true);

    return () => {
      document.removeEventListener('click', handleCloseSidebar, true);
    };
  }, [elementRef, handler, attached]);
}
