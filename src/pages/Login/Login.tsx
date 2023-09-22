import { LoginForm } from './LoginForm/LoginForm';

export function Login() {
  return (
    <div className="grid grid-cols-1 max-w-xs mx-auto mt-32 p-4">
      <div className="text-center text-5xl my-8 whitespace-nowrap">
        <h1 className="font-bold">Fazer Login</h1>
      </div>
      <LoginForm />
    </div>
  );
}
