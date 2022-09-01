import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './AllRoutes';

type RouterProviderProps = {
  children?: React.ReactNode | JSX.Element;
};

export function RouterProvider({ children }: RouterProviderProps) {
  return (
    <BrowserRouter>
      {children}
      <AllRoutes />
    </BrowserRouter>
  );
}
