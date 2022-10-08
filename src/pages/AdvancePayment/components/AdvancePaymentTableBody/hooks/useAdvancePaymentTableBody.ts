import { useCalcPayments } from '@shared/hooks/useCalcPayments';
import { convertToBRL } from '@shared/utils/number';

type UseAdvancePaymentTableBodyProps = { salary: number };

export const useAdvancePaymentTableBody = ({
  salary,
}: UseAdvancePaymentTableBodyProps) => {
  const {
    functions: { formatBRL },
  } = useCalcPayments();

  const baseSalary = convertToBRL(formatBRL(salary), false);
  const valueToPay = convertToBRL(formatBRL(salary * 0.4), false);

  return {
    data: { baseSalary, valueToPay },
  };
};
