import { CeciliaButton, CeciliaText } from '@shared/components';
import { useFormik } from 'formik';
import { useLoginForm } from './hooks/useLoginForm';

export enum FormFields {
  name = 'name',
  password = 'password',
}

export function LoginForm() {
  const {
    data: { initialValues },
    functions: { onSubmit },
  } = useLoginForm();

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <CeciliaText
          placeholder="Digite o usuário"
          value={formik.values[FormFields.name]}
          onChange={formik.handleChange(FormFields.name)}
        />
      </div>

      <div>
        <CeciliaText
          placeholder="Digite a senha"
          type="password"
          value={formik.values[FormFields.password]}
          onChange={formik.handleChange(FormFields.password)}
        />
      </div>

      <CeciliaButton title="Entrar" type="submit" />
    </form>
  );
}
