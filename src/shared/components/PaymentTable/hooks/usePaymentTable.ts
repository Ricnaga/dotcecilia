import { getMonthsDifference } from '@shared/utils/date';
import { useCallback } from 'react';

type GetMonthDifferenceType = Record<
  'startDate' | 'endDate' | 'monthRef',
  Date
>;

type UsePaymentTableProps = GetMonthDifferenceType;

type FormatToBRDateType = Record<'year' | 'month' | 'day', string>;

export const usePaymentTable = ({
  monthRef,
  endDate,
  startDate,
}: UsePaymentTableProps) => {
  const formatMonth = useCallback((unformattedDate: Date) => {
    const formatDate = new Date(unformattedDate).toLocaleDateString();
    const [day, month, year] = formatDate.split('/');
    return new Date(Number(year), Number(month) - 2, Number(day))
      .toLocaleDateString('pt-br', { month: 'long' })
      .toUpperCase();
  }, []);

  const formattedMonthRef = formatMonth(monthRef);

  const formatToBRDate = ({ year, month, day }: FormatToBRDateType) =>
    new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString(
      'pt-br',
    );

  const getDateDifference = useCallback(() => {
    const [initialDay, initialMonth, initialYear] = new Date(startDate)
      .toLocaleDateString('pt-br')
      .split('/');

    const [endDay, endMonth, endYear] = new Date(endDate)
      .toLocaleDateString('pt-br')
      .split('/');

    const newStartDate = formatToBRDate({
      year: initialYear,
      month: initialMonth,
      day: initialDay,
    });

    const newEndDate = formatToBRDate({
      year: endYear,
      month: endMonth,
      day: endDay,
    });

    return `Ref. ${newStartDate} á ${newEndDate} -     
 (${getMonthsDifference(startDate, endDate)}) MESES`;
  }, [startDate, endDate]);

  const dateDifference = getDateDifference();

  return {
    data: { formattedMonthRef, dateDifference },
  };
};
