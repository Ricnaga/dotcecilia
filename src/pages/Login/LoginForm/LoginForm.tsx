import { Button, Input } from '@shared/components';
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
      <div className="mb-4">
        <Input
          placeholder="Digite o usuário"
          value={formik.values[FormFields.name]}
          onChange={formik.handleChange(FormFields.name)}
        />
      </div>

      <div className="mb-4">
        <Input
          placeholder="Digite a senha"
          type="password"
          value={formik.values[FormFields.password]}
          onChange={formik.handleChange(FormFields.password)}
        />
      </div>

      <Button type="submit" className="w-full mt-2">
        Entrar
      </Button>
    </form>
  );
}
