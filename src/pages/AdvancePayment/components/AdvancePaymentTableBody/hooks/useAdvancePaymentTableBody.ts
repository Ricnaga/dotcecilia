import { useCalcPayments } from '@shared/hooks/useCalcPayments';
import { convertToBRL } from '@shared/utils/number';

type UseAdvancePaymentTableBodyProps = { salary: number };

export const useAdvancePaymentTableBody = ({
  salary,
}: UseAdvancePaymentTableBodyProps) => {
  const {
    functions: { formatBRL, getPreviousAdvanceValue },
  } = useCalcPayments();

  const baseSalary = convertToBRL(formatBRL(salary), false);
  const valueToPay = convertToBRL(getPreviousAdvanceValue(salary), false);

  return {
    data: { baseSalary, valueToPay },
  };
};
