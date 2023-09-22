import { useNavigate } from 'react-router-dom';
import { ENV_PASSWORD, ENV_USER } from '@config';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { CALCULATOR } from '@application/routes/paths';
import { FormFields } from '../LoginForm';

type FormikValues = Record<keyof typeof FormFields, string>;

export const useLoginForm = () => {
  const { saveUserData } = useLocalStorage();
  const navigate = useNavigate();

  const initialValues: FormikValues = {
    [FormFields.name]: '',
    [FormFields.password]: '',
  };

  const validateCredentials = (values: FormikValues) =>
    [ENV_USER].includes(values.name.toLowerCase()) &&
    [ENV_PASSWORD].includes(values.password);

  const onSubmit = (values: FormikValues) => {
    if (validateCredentials(values)) {
      saveUserData(values);
      navigate(CALCULATOR);
    }
  };

  return {
    data: {
      initialValues,
    },
    functions: {
      onSubmit,
    },
  };
};
