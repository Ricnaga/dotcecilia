import { PropsWithChildren, ReactNode, RefObject } from 'react';

type PaymentContainerProps = {
  printRef: RefObject<HTMLTableElement>;
  calculator: ReactNode;
};

export function PaymentContainer({
  printRef,
  calculator,
  children,
}: PropsWithChildren<PaymentContainerProps>) {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10">
      <div className="col-span-2 2xl:col-span-1 md:px-14 md:py-2 xl:p-0">
        {calculator}
      </div>
      <div className="col-span-2 grid grid-cols-1 overflow-auto" ref={printRef}>
        {children}
      </div>
    </div>
  );
}
