import { useCalc } from '@shared/hooks/useCalc';

type UseAdvancePaymentTableBodyProps = { salary: number };

export const useAdvancePaymentTableBody = ({
  salary,
}: UseAdvancePaymentTableBodyProps) => {
  const { toBRL, getPreviousAdvance } = useCalc();

  const baseSalary = toBRL(salary, false);
  const valueToPay = toBRL(getPreviousAdvance(salary), false);

  return {
    data: { baseSalary, valueToPay },
  };
};
