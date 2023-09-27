import {
  RouterProvider as BaseRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { privateRouter } from '../Private';
import { publicRouter } from '../Public';

const router = createBrowserRouter([publicRouter, privateRouter]);

export function RouterProvider() {
  return <BaseRouterProvider router={router} />;
}
