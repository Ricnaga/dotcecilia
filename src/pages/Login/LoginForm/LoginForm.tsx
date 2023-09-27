import { LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import { Button, Input } from '@shared/components';
import { InputPassword } from '@shared/components/Input/InputPassword/InputPassword';
import { useLoginForm } from './hooks/useLoginForm';

export enum FormFields {
  name = 'name',
  password = 'password',
}

export function LoginForm() {
  const {
    data: { formik },
  } = useLoginForm();

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <Input
          startIcon={<UserIcon width={24} />}
          placeholder="Digite o usuário"
          errorMessage={formik.errors.name}
          value={formik.values[FormFields.name]}
          onChange={formik.handleChange(FormFields.name)}
        />
      </div>

      <div className="mb-4">
        <InputPassword
          startIcon={<LockClosedIcon width={24} />}
          placeholder="Digite a senha"
          errorMessage={formik.errors.password}
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
