import { LoginForm } from './LoginForm/LoginForm';

export function LoginPage() {
  return (
    <div className="grid items-center justify-center h-full mt-20">
      <p className="text-7xl font-medium mb-8 text-center">Fazer Login</p>
      <LoginForm />
    </div>
  );
}
