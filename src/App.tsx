import { RouterProvider } from './application/routes';
import { CeciliaNavbar } from './shared/components/CeciliaNavbar/CeciliaNavbar';

export function App() {
  return (
    <RouterProvider>
      <CeciliaNavbar />
    </RouterProvider>
  );
}
