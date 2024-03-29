import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/components/App/App';
import { Loader } from '@/components/ui-components/Loader';
import { PageNotFound } from '@/pages/PageNotFound';

const HomePage = lazy(() => import('@/pages/Home'));
const BankCardPage = lazy(() => import('@/pages/BankCard'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const TimeLinePage = lazy(() => import('@/pages/Timeline'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Loader />}><HomePage /></Suspense>,
      },
      {
        path: '/timeline',
        element: <Suspense fallback={<Loader />}><TimeLinePage /></Suspense>,
      },
      {
        path: '/bank-card',
        element: <Suspense fallback={<Loader />}><BankCardPage /></Suspense>,
      },
      {
        path: '/contact',
        element: <Suspense fallback={<Loader />}><ContactPage /></Suspense>,
      },
      {
        path: '*',
        element: <Suspense fallback={<Loader />}><PageNotFound /></Suspense>,
      },
    ],
  },
]);
