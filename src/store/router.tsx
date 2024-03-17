import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/components/App/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/timeline',
        element: <Suspense fallback="Loading...."><h1>About</h1></Suspense>,
      },
      {
        path: '/bank-card',
        element: <Suspense fallback="Loading...."><h1>bank-card</h1></Suspense>,
      },
      {
        path: '/contact',
        element: <Suspense fallback="Loading...."><h1>contact</h1></Suspense>,
      },
    ],
  },
]);
