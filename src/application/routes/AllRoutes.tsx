import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import {
  CalculatorPage,
  LoginPage,
  PaystubPage,
  AdvancePaymentPage,
  AgreementPage,
} from '../../pages';
import { CeciliaNavbar } from '../../shared/components';
import { useRoute } from './hooks/useRoute';
import {
  CALCULATOR,
  LOGIN,
  PAYSTUB,
  ADVANCEPAYMENT,
  AGREEMENT,
} from './routes';

function PublicRoute() {
  const { hasAuthentication } = useRoute();
  return hasAuthentication() ? (
    <Navigate to={CALCULATOR} replace />
  ) : (
    <Outlet />
  );
}

function PrivateRoute() {
  const { hasAuthentication } = useRoute();

  return !hasAuthentication() ? (
    <Navigate to={LOGIN} replace />
  ) : (
    <>
      <CeciliaNavbar />
      <Outlet />
    </>
  );
}

export function AllRoutes() {
  return (
    <Routes>
      <Route path={LOGIN} element={<PublicRoute />}>
        <Route index element={<LoginPage />} />
      </Route>
      <Route path={LOGIN} element={<PrivateRoute />}>
        <Route path={ADVANCEPAYMENT} element={<AdvancePaymentPage />} />
        <Route path={AGREEMENT} element={<AgreementPage />} />
        <Route path={CALCULATOR} element={<CalculatorPage />} />
        <Route path={PAYSTUB} element={<PaystubPage />} />
      </Route>
    </Routes>
  );
}
