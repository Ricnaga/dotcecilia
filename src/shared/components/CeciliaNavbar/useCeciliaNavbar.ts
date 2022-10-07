import { useNavigate } from 'react-router-dom';
import {
  AGREEMENT,
  CALCULATOR,
  LOGIN,
  PAYSTUB,
  ADVANCEPAYMENT,
} from '@application/routes/routes';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const useCeciliaNavbar = () => {
  const navigate = useNavigate();
  const { deleteUserData } = useLocalStorage();
  const links = [
    {
      href: CALCULATOR,
      children: 'Calculadora',
    },
    {
      href: PAYSTUB,
      children: 'Holerite',
    },
    {
      href: ADVANCEPAYMENT,
      children: 'Adiantamento',
    },
    {
      href: AGREEMENT,
      children: 'Acerto',
    },
  ];

  const logOut = () => {
    deleteUserData();
    navigate(LOGIN);
  };
  return {
    data: { links },
    functions: { logOut },
  };
};
