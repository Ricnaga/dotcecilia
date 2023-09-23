import { useCalc } from '@shared/hooks/useCalc';
import { getMonthsDifference } from '@shared/utils/date';
import { TitleItems } from '@shared/utils/types';
import { useCallback } from 'react';
import { AgreementCalculatorFields } from '../../AgreementCalculator/AgreementCalculator';
import { agreementValues } from '../AgreementTableBody';

type UseAgreementTableBodyProps = Record<'values', AgreementCalculatorFields>;

export const useAgreementTableBody = ({
  values,
}: UseAgreementTableBodyProps) => {
  const { getVacation, getOneThirdVacation, toBRL } = useCalc();

  const vacationOrThirteenth = getVacation(
    values.salary,
    parseInt(
      getMonthsDifference(new Date(values.startDate), new Date(values.endDate)),
      10,
    ),
  );

  const formattedValues: TitleItems<
    typeof agreementValues,
    { discount: string }
  > = [
    {
      title: 'thirteenth',
      value: toBRL(vacationOrThirteenth, false),
      discount: toBRL(values.discount, false),
    },
    {
      title: 'vacation',
      value: toBRL(vacationOrThirteenth, false),
    },
    {
      title: 'oneThirdVcation',
      value: toBRL(
        getOneThirdVacation(
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

  const getAgreementTotalToPay = useCallback(
    () =>
      vacationOrThirteenth * 2 +
      getOneThirdVacation(
        values.salary,
        parseInt(
          getMonthsDifference(
            new Date(values.startDate),
            new Date(values.endDate),
          ),
          10,
        ),
      ),
    [values.salary, values.startDate, values.endDate],
  );

  const totalToPay = toBRL(getAgreementTotalToPay(), false);

  const total = toBRL(getAgreementTotalToPay() - values.discount, false);

  return {
    data: {
      formattedValues,
      totalToPay,
      total,
      salary: toBRL(values.salary, false),
    },
  };
};
