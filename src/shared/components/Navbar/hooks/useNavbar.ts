import { useNavigate } from 'react-router-dom';
import {
  AGREEMENT,
  CALCULATOR,
  LOGIN,
  PAYSTUB,
  ADVANCEPAYMENT,
} from '@application/routes/paths';
import { useState } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const useNavbar = () => {
  const [menuIsOpen, setMenuAsOpen] = useState<boolean>(false);
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
    data: { links, menuIsOpen },
    functions: { logOut, setMenuAsOpen },
  };
};
