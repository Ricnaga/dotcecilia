import { useCalcPayments } from '@shared/hooks/useCalcPayments';
import { getMonthsDifference } from '@shared/utils/date';
import { convertToBRL } from '@shared/utils/number';
import { TitleItems } from '..';
import { AgreementCalculatorFields } from '../../AgreementCalculator';

type UseAgreementTableBodyProps = Record<'values', AgreementCalculatorFields>;

export const useAgreementTableBody = ({
  values,
}: UseAgreementTableBodyProps) => {
  const {
    functions: { getVacationValue, getOneThirdVacationValue, formatBRL },
  } = useCalcPayments();
  const vacationOrThirteenth = getVacationValue(
    values.salary,
    parseInt(
      getMonthsDifference(new Date(values.startDate), new Date(values.endDate)),
      10,
    ),
  );

  const formattedValues: Array<TitleItems> = [
    {
      title: 'thirteenth',
      value: convertToBRL(vacationOrThirteenth, false),
      discount: convertToBRL(formatBRL(values.discount), false),
    },
    {
      title: 'vacation',
      value: convertToBRL(vacationOrThirteenth, false),
    },
    {
      title: 'oneThirdVcation',
      value: convertToBRL(
        getOneThirdVacationValue(
          values.salary,
          parseInt(
            getMonthsDifference(
              new Date(values.startDate),
              new Date(values.endDate),
            ),
            10,
          ),
        ),
        false,
      ),
    },
  ];

  const getAgreementTotalToPay = () =>
    vacationOrThirteenth * 2 +
    getOneThirdVacationValue(
      values.salary,
      parseInt(
        getMonthsDifference(
          new Date(values.startDate),
          new Date(values.endDate),
        ),
        10,
      ),
    );

  const totalToPay = convertToBRL(getAgreementTotalToPay(), false);

  const total = convertToBRL(
    getAgreementTotalToPay() - formatBRL(values.discount),
    false,
  );

  return {
    data: {
      formattedValues,
      totalToPay,
      total,
      salary: convertToBRL(formatBRL(values.salary), false),
    },
  };
};
