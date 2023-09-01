import { ReactNode } from 'react';
import Auth from '../pages/auth';
import Home from '../pages/home';

interface Route {
  path: string;
  element: ReactNode;
}

const routes: Route[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth',
    element: <Auth />
  }
];

export default routes;
