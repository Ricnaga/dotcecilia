import {
  RouterProvider as BaseRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { publicRouter } from '../Public';
import { privateRouter } from '../Private';

const router = createBrowserRouter([publicRouter, privateRouter]);

export function RouterProvider() {
  return <BaseRouterProvider router={router} />;
}
