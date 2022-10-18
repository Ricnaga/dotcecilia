import { CeciliaButton, CeciliaText } from '@shared/components';
import { useLoginForm } from './hooks/useLoginForm';

export enum FormFields {
  name = 'name',
  password = 'password',
}

export function LoginForm() {
  const {
    data: { values },
    functions: { onChange, onSubmit },
  } = useLoginForm();

  return (
    <form onSubmit={onSubmit}>
      <div>
        <CeciliaText
          placeholder="Digite o usuário"
          value={values[FormFields.name]}
          onChange={onChange(FormFields.name)}
        />
      </div>

      <div>
        <CeciliaText
          placeholder="Digite a senha"
          type="password"
          value={values[FormFields.password]}
          onChange={onChange(FormFields.password)}
        />
      </div>

      <CeciliaButton title="Entrar" type="submit" />
    </form>
  );
}
