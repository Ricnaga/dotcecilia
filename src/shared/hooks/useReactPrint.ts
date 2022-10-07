import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export const useReactPrint = () => {
  const printRef = useRef<HTMLTableElement>(null);
  const setPrint = useReactToPrint({
    content: () => printRef.current,
  });

  return { data: { printRef }, functions: { setPrint } };
};
