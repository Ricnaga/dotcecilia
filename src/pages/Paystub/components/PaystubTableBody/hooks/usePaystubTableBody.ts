import { useCalc } from '@shared/hooks/useCalc';
import { useCallback } from 'react';
import { PaystubTableBodyItems } from '../PaystubTableBody';

type UsePaystubTableBodyProps = Record<'values', PaystubTableBodyItems>;

const DATERANGE = '(:firstWorkDay à :lastWorkDay)';

export const usePaystubTableBody = ({ values }: UsePaystubTableBodyProps) => {
  const {
    toBRL,
    getUnsanitary,
    getExtraHour,
    getMissingDays,
    getVTR,
    getPreviousAdvance,
  } = useCalc();

  const formatDateRange = useCallback(() => {
    const firstWorkDay = new Date(values.initialWorkdayMonth)
      .toLocaleDateString('pt-br')
      .split('/')[0];

    const lastWorkDay = new Date(values.lastWorkdayMonth).toLocaleDateString(
      'pt-br',
    );

    return DATERANGE.replace(':firstWorkDay', firstWorkDay).replace(
      ':lastWorkDay',
      lastWorkDay,
    );
  }, [values.initialWorkdayMonth, values.lastWorkdayMonth]);

  const extraHour = values.extraHour && !values.fullExtra;
  const fullExtra = values.extraHour && values.fullExtra;

  const getVtrWorkDays = () => {
    const [day, month, year] = new Date(values.lastWorkdayMonth)
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
    () =>
      parseFloat(getMissingDays(values.salary).toFixed(2)) * values.missingDays,
    [values.salary, values.missingDays],
  );

  const validateUnsanitary = useCallback(
    () => (values.hasUnsanitary ? getUnsanitary(values.unsanitary) : 0),
    [values.hasUnsanitary, values.unsanitary],
  );

  const validateExtra = useCallback(
    (percentage: number, extraHour: boolean) =>
      extraHour
        ? getExtraHour({
            valueHour: values.hours,
            salary: values.salary,
            extra: percentage,
          })
        : 0,
    [values.hours, values.salary],
  );

  const getTotal = useCallback(
    () =>
      values.salary +
      getVtrMonthValue() +
      validateUnsanitary() +
      validateExtra(1.6, extraHour) +
      validateExtra(2, fullExtra),
    [values.salary, extraHour, fullExtra, values.hasUnsanitary],
  );

  const getTotalDiscount = useCallback(
    () =>
      getTotalMissingDays() +
      getPreviousAdvance(values.salary) +
      getVTR(values.salary),
    [values.salary],
  );

  const formattedValues = {
    salary: toBRL(values.salary, false),
    hasUnsanitary: values.hasUnsanitary,
    unsanitary: toBRL(getUnsanitary(values.unsanitary), false),
    previousAdvance: toBRL(getPreviousAdvance(values.salary), false),
    total: toBRL(getTotal(), false),
    totalDiscount: toBRL(getTotalDiscount(), false),
    netTotal: toBRL(getTotal() - getTotalDiscount(), false),
  };

  const formattedMissingDays = {
    missingDays: values.missingDays,
    totalMissingDays: toBRL(getTotalMissingDays(), false),
  };

  const formattedHours = {
    hours: values.hours,
    extraHour,
    extraHourValue: toBRL(
      getExtraHour({
        valueHour: values.hours,
        extra: 1.6,
        salary: values.salary,
      }),
      false,
    ),
    fullExtra,
    fullExtraValue: toBRL(
      getExtraHour({
        valueHour: values.hours,
        extra: 2,
        salary: values.salary,
      }),
      false,
    ),
  };

  const formattedVtr = {
    vtr: toBRL(values.vtr, false),
    vtrMonthValue: toBRL(getVtrMonthValue(), false),
    vtrRef: getVtrWorkDays(),
    discountedVtr: toBRL(getVTR(values.salary), false),
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
