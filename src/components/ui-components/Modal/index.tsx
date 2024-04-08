import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { ModalProps } from '@/components/ui-components/Modal/type';

import classes from './styles.scss';

export const ModalBase: React.FC<ModalProps> = React.memo(
  ({ isOpen, onCloseModal, children }: ModalProps) => {
    const modalRef = useRef();

    useOutsideClick(modalRef, onCloseModal, isOpen);

    if (!isOpen) return null;
    return createPortal(
      <div
        ref={modalRef}
        className={classes.modal_wrapper}
        onClick={onCloseModal}
        aria-hidden
      >
        <div
          className={classes.modal_content}
          onClick={(e) => e.stopPropagation()}
          aria-hidden
        >
          <div className={classes.modal_header}>
            <button type="button" className={classes.close_button} onClick={onCloseModal}>X</button>
          </div>
          <div className={classes.modal_body}>
            {children}
          </div>
        </div>
      </div>,
    document.getElementById('modal') as HTMLElement,
    );
  },
);
