import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import { bannerTitleCurrency } from '@/constants';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import classes from './styles.scss';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

export const ModalBase: React.FC<ModalProps> = ({ isOpen, onCloseModal, children }) => {
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
          <h2>{bannerTitleCurrency}</h2>
          <button type="button" className={classes.close_button} onClick={onCloseModal}>X</button>
        </div>
        <div className={classes.modal_body}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};
