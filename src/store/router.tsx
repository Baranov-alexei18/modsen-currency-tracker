import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/components/App/App';
import { Loader } from '@/components/ui-components/Loader';
import { HomePage } from '@/pages/Home';

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
        element: <Suspense fallback={<Loader />}><h1>23</h1></Suspense>,
      },
      {
        path: '/bank-card',
        element: <Suspense fallback={<Loader />}><h1>bank-card</h1></Suspense>,
      },
      {
        path: '/contact',
        element: <Suspense fallback={<Loader />}><h1>contact</h1></Suspense>,
      },
    ],
  },
]);
