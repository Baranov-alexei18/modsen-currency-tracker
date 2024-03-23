import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './styles.scss';

interface ToastProps {
    text: string;
    color: string;
}

export const Toast: React.FC<ToastProps> = ({ text, color }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return visible ? createPortal(
    <div className={`${classes.toast_wrapper} ${visible && classes.show} `} style={{ backgroundColor: color }}>
      <p className="toast-text">{text}</p>
    </div>,
    document.getElementById('modal'),
  ) : null;
};
