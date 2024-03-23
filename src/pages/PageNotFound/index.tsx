import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui-components/Button';

import classes from './styes.scss';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className={classes.wrapper}>
      <h1>Страница не найдена</h1>
      <Button handleClick={handleReturnHome}>
        Вернуться на главную
      </Button>
    </div>
  );
};
