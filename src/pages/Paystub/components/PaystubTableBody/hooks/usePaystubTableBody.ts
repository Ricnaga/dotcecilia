import { useCalcPayments } from '@shared/hooks/useCalcPayments';
import { convertToBRL } from '@shared/utils/number';
import { useCallback } from 'react';
import { PaystubTableBodyItems } from '../PaystubTableBody';

type UsePaystubTableBodyProps = Record<'values', PaystubTableBodyItems>;

export const usePaystubTableBody = ({ values }: UsePaystubTableBodyProps) => {
  const {
    functions: {
      formatBRL,
      getExtraHour,
      getUnsanitaryValue,
      getPreviousAdvanceValue,
      getVTRDiscountValue,
    },
  } = useCalcPayments();

  const formatDateRange = useCallback(() => {
    const firstWorkDay = new Date(values.initialWorkdayMonth)
      .toLocaleDateString('pt-br')
      .split('/')[0];

    const lastWorkDay = new Date(values.lastWorkdayMonth).toLocaleDateString(
      'pt-br',
    );

    return `(${firstWorkDay} à ${lastWorkDay})`;
  }, [values.initialWorkdayMonth, values.lastWorkdayMonth]);

  const extraHour = values.extraHour && !values.fullExtra;
  const fullExtra = values.extraHour && values.fullExtra;

  const getVtrWorkDays = () => {
    const [day = 0, month, year] = new Date(values.lastWorkdayMonth)
      .toLocaleDateString('pt-br')
      .split('/');

    return (
      new Array<number>(Number(day))
        .fill(Math.round(Math.random()))
        .reduce((accumulator, __, index) => {
          const weekDay = new Date(
            Number(year),
            Number(month) - 1,
            index + 1,
          ).getDay();

          return weekDay !== 0 && weekDay !== 6 ? accumulator + 1 : accumulator;
        }, 0) - values.discountedDays
    );
  };

  const getVtrMonthValue = useCallback(
    () => getVtrWorkDays() * values.vtr,
    [values.vtr],
  );
  const getTotalMissingDays = useCallback(
    () => parseFloat((values.salary / 30).toFixed(2)) * values.missingDays,
    [values.salary, values.missingDays],
  );

  const validateUnsanitary = useCallback(
    () => (values.hasUnsanitary ? getUnsanitaryValue(values.unsanitary) : 0),
    [values.hasUnsanitary, values.unsanitary],
  );

  const validateExtra = useCallback(
    (percentage: number, extraHour: boolean) =>
      extraHour
        ? getExtraHour({
            hours: values.hours,
            money: values.salary,
            percentage,
          })
        : 0,
    [values.hours, values.salary],
  );

  const getTotal = useCallback(
    () =>
      formatBRL(values.salary) +
      formatBRL(getVtrMonthValue()) +
      formatBRL(validateUnsanitary()) +
      validateExtra(1.6, extraHour) +
      validateExtra(2, fullExtra),
    [values.salary, extraHour, fullExtra],
  );

  const getTotalDiscount = useCallback(
    () =>
      formatBRL(getTotalMissingDays()) +
      getPreviousAdvanceValue(values.salary) +
      getVTRDiscountValue(values.salary),
    [values.salary],
  );

  const formattedValues = {
    salary: convertToBRL(formatBRL(values.salary), false),
    hasUnsanitary: values.hasUnsanitary,
    unsanitary: convertToBRL(
      formatBRL(getUnsanitaryValue(values.unsanitary)),
      false,
    ),
    previousAdvance: convertToBRL(
      getPreviousAdvanceValue(values.salary),
      false,
    ),
    total: convertToBRL(getTotal(), false),
    totalDiscount: convertToBRL(getTotalDiscount(), false),
    netTotal: convertToBRL(getTotal() - getTotalDiscount(), false),
  };

  const formattedMissingDays = {
    missingDays: values.missingDays,
    totalMissingDays: convertToBRL(formatBRL(getTotalMissingDays()), false),
  };

  const formattedHours = {
    hours: values.hours,
    extraHour,
    extraHourValue: convertToBRL(
      getExtraHour({
        hours: values.hours,
        percentage: 1.6,
        money: values.salary,
      }),
      false,
    ),
    fullExtra,
    fullExtraValue: convertToBRL(
      getExtraHour({
        hours: values.hours,
        percentage: 2,
        money: values.salary,
      }),
      false,
    ),
  };

  const formattedVtr = {
    vtr: convertToBRL(formatBRL(values.vtr), false),
    vtrMonthValue: convertToBRL(formatBRL(getVtrMonthValue()), false),
    vtrRef: getVtrWorkDays(),
    discountedVtr: convertToBRL(getVTRDiscountValue(values.salary), false),
    dateRange: formatDateRange(),
  };

  return {
    data: {
      formattedValues,
      formattedVtr,
      formattedHours,
      formattedMissingDays,
    },
  };
};
