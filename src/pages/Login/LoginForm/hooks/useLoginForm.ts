import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { CALCULATOR } from '@application/routes/routes';
import { ENV_PASSWORD, ENV_USER } from '@config';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { useMemo } from 'react';
import { FormFields } from '../LoginForm';

type FormikValues = Record<keyof typeof FormFields, string>;

export const useLoginForm = () => {
  const { saveUserData } = useLocalStorage();
  const navigate = useNavigate();

  const initialValues: FormikValues = useMemo(
    () => ({
      [FormFields.name]: '',
      [FormFields.password]: '',
    }),
    [],
  );

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
  });

  return {
    data: {
      values: formik.values,
    },
    functions: {
      onChange: formik.handleChange,
      onSubmit: formik.handleSubmit,
    },
  };
};
