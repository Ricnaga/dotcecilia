import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './AllRoutes';

type RouterProviderProps = {
  children: ReactNode;
};

export function RouterProvider({ children }: RouterProviderProps) {
  return (
    <BrowserRouter>
      {children}
      <AllRoutes />
    </BrowserRouter>
  );
}
