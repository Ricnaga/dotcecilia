import { getMonthsDifference } from '@shared/utils/date';

type GetMonthDifferenceType = Record<
  'startDate' | 'endDate' | 'monthRef',
  Date
>;

type UseCeciliaTableProps = GetMonthDifferenceType;

type FormatToBRDateType = Record<'year' | 'month' | 'day', string>;

export const useCeciliaTable = ({
  monthRef,
  endDate,
  startDate,
}: UseCeciliaTableProps) => {
  const formatMonth = (unformattedDate: Date) => {
    const formatDate = new Date(unformattedDate).toLocaleDateString();
    const [month, day, year] = formatDate.split('/');
    return new Date(Number(year), Number(month) - 2, Number(day))
      .toLocaleDateString('pt-br', { month: 'long' })
      .toUpperCase();
  };

  const formattedMonthRef = formatMonth(monthRef);

  const validateDate = (date: string) =>
    date === 'Invalid Date' ? 'dd/mm/aaaa' : date;

  const formatToBRDate = ({ year, month, day }: FormatToBRDateType) =>
    new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString(
      'pt-br',
    );

  const getDateDifference = () => {
    const validatestartDate = startDate ?? new Date().toString();
    const validateEndDate = endDate ?? new Date().toString();

    const [initialDay, initialMonth, initialYear] = new Date(validatestartDate)
      .toLocaleDateString('pt-br')
      .split('/');

    const [endDay, endMonth, endYear] = new Date(validateEndDate)
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

    return `Ref. ${validateDate(newStartDate)} á ${validateDate(
      newEndDate,
    )} (${getMonthsDifference(validatestartDate, validateEndDate)}) MESES`;
  };

  const dateDifference = getDateDifference();

  return {
    data: { formattedMonthRef, dateDifference },
  };
};
