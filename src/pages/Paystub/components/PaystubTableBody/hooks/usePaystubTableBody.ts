import { useCalcPayments } from '../../../../../shared/hooks/useCalcPayments';
import { getWorkDaysInMonth } from '../../../../../shared/utils/date';
import { convertToBRL } from '../../../../../shared/utils/number';
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

  const formatDateRange = () => {
    const [__, ___, initialWorkDay] = values.initialWorkdayMonth.split('-');
    const initialDay = initialWorkDay ?? 'dd';

    const [year, month, day] = values.lastWorkdayMonth.split('-');
    const lastWorkDate = day ? `${day}/${month}/${year}` : 'dd/mm/aaaa';

    return `(${initialDay} à ${lastWorkDate})`;
  };

  const extraHour = values.extraHour && !values.fullExtra;
  const fullExtra = values.extraHour && values.fullExtra;

  const getVtrWorkDays = () => {
    const [year, month, day = 0] = values.lastWorkdayMonth.split('-');
    return (
      getWorkDaysInMonth({
        day: Number(day),
        month: Number(month),
        year: Number(year),
      }) - values.discountedDays
    );
  };

  const getVtrMonthValue = () => getVtrWorkDays() * values.vtr;
  const getTotalMissingDays = () => (values.salary / 30) * values.missingDays;

  const validateUnsanitary = () =>
    values.hasUnsanitary ? getUnsanitaryValue(values.unsanitary) : 0;

  const validateExtra = () =>
    extraHour
      ? getExtraHour({
          hours: values.hours,
          money: values.salary,
          percentage: 1.6,
        })
      : 0;
  const validateFullExtra = () =>
    fullExtra
      ? getExtraHour({
          hours: values.hours,
          money: values.salary,
          percentage: 2,
        })
      : 0;

  const getTotal = () =>
    formatBRL(values.salary) +
    formatBRL(getVtrMonthValue()) +
    formatBRL(validateUnsanitary()) +
    validateExtra() +
    validateFullExtra();

  const getTotalDiscount = () =>
    formatBRL(getTotalMissingDays()) +
    getPreviousAdvanceValue(values.salary) +
    getVTRDiscountValue(values.salary);

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
