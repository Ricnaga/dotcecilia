import { Route, Routes } from 'react-router-dom';
import { LoginPage, PayStub } from '../../pages';
import { LOGIN, PAYSTUB } from './routes';

export function AllRoutes() {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={PAYSTUB} element={<PayStub />} />
    </Routes>
  );
}
