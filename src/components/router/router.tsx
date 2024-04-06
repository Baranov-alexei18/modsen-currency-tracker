import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/components/App/App';
import { Loader } from '@/components/ui-components/Loader';
import { PATH } from '@/constants/routerLinks';
import { PageNotFound } from '@/pages/PageNotFound';
import { store } from '@/store/store';

const HomePage = lazy(() => import('@/pages/Home'));
const BankCardPage = lazy(() => import('@/pages/BankCard'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const TimeLinePage = lazy(() => import('@/pages/Timeline'));

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Provider store={store}><App /></Provider>,
    children: [
      {
        path: PATH.HOME,
        element: <Suspense fallback={<Loader />}><HomePage /></Suspense>,
      },
      {
        path: PATH.TIMELINE,
        element: <Suspense fallback={<Loader />}><TimeLinePage /></Suspense>,
      },
      {
        path: PATH.BANK_CARD,
        element: <Suspense fallback={<Loader />}><BankCardPage /></Suspense>,
      },
      {
        path: PATH.CONTACT,
        element: <Suspense fallback={<Loader />}><ContactPage /></Suspense>,
      },
      {
        path: PATH.NOT_FOUND,
        element: <Suspense fallback={<Loader />}><PageNotFound /></Suspense>,
      },
    ],
  },
]);
