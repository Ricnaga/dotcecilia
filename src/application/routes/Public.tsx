import { Login } from '@pages';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { useRoute } from './hooks/useRoute';
import { CALCULATOR, LOGIN } from './paths';

function PublicRoute() {
  const { hasAuthentication } = useRoute();
  return hasAuthentication() ? (
    <Navigate to={CALCULATOR} replace />
  ) : (
    <Outlet />
  );
}

const children: Array<RouteObject> = [
  {
    path: LOGIN,
    element: <Login />,
  },
];

export const publicRouter: RouteObject = {
  path: LOGIN,
  element: <PublicRoute />,
  children,
};
