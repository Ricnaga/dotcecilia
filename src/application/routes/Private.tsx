import { AdvancePayment, Agreement, Calculator, Paystub } from '@pages';
import { Navbar } from '@shared/components';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import { useRoute } from './hooks/useRoute';
import { ADVANCEPAYMENT, AGREEMENT, CALCULATOR, LOGIN, PAYSTUB } from './paths';

function PrivateRoute() {
  const { hasAuthentication } = useRoute();

  return !hasAuthentication() ? (
    <Navigate to={LOGIN} replace />
  ) : (
    <div className="p-6 flex gap-4 flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

const children: Array<RouteObject> = [
  {
    path: CALCULATOR,
    element: <Calculator />,
  },
  {
    path: PAYSTUB,
    element: <Paystub />,
  },
  {
    path: ADVANCEPAYMENT,
    element: <AdvancePayment />,
  },
  {
    path: AGREEMENT,
    element: <Agreement />,
  },
];

export const privateRouter: RouteObject = {
  path: LOGIN,
  element: <PrivateRoute />,
  children,
};
