import '@/assets/style/index.scss';

import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/components/App';

const root = document.getElementById('root');

const app = createRoot(root);

const router = createBrowserRouter([
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

app.render(
  <RouterProvider router={router} />,
);
