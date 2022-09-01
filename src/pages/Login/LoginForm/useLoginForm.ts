import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormFields } from '.';
import { PAYSTUB } from '../../../application/routes/routes';

type FormikValues = { name: string; password: string };

export const useLoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    [FormFields.name]: '',
    [FormFields.password]: '',
  };

  const validateCredentials = (values: FormikValues) =>
    [import.meta.env.VITE_USER].includes(values.name) &&
    [import.meta.env.VITE_USER].includes(values.name);

  const onSubmit = (values: FormikValues) => {
    if (validateCredentials(values)) {
      navigate(PAYSTUB);
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
