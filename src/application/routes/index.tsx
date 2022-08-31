import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, PayStub } from '../../pages';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/paystub" element={<PayStub />} />
    </Routes>
  );
}

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
