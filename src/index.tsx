import '@/assets/style/index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/store/router';

const root = document.getElementById('root');

const app = createRoot(root);

app.render(
  <RouterProvider router={router} />,
);
