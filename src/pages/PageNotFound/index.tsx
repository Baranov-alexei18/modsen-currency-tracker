import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './styes.scss';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className={classes.wrapper}>
      <h1>Страница не найдена</h1>
      <button type="button" onClick={handleReturnHome}>
        Вернуться на главную
      </button>
    </div>
  );
};
