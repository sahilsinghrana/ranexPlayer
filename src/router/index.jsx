import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Layout = lazy(() => import('../components/Layout'));

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        Component: Home,
      },
    ],
  },
]);

export default router;
