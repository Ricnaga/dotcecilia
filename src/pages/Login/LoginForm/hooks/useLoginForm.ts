import { useFormik } from 'formik';
import * as yup from 'yup';
import { CALCULATOR } from '@application/routes/paths';
import { ENV_PASSWORD, ENV_USER } from '@config';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { FormFields } from '../LoginForm';

type FormikValues = Record<keyof typeof FormFields, string>;

export const useLoginForm = () => {
  const { saveUserData } = useLocalStorage();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    [FormFields.name]: yup.string().required('Usuário é obrigatório'),
    [FormFields.password]: yup.string().required('Senha é obrigatório'),
  });

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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return {
    data: {
      formik,
    },
  };
};
