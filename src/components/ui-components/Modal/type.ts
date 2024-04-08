import { ReactNode } from 'react';

export type ModalProps = {
    children: ReactNode;
    isOpen: boolean;
    onCloseModal: () => void;
};
