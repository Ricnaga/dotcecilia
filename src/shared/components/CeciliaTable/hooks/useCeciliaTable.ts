import { getMonthsDifference } from '@shared/utils/date';

type GetMonthDifferenceType = Partial<Record<'startDate' | 'endDate', string>>;

type UseCeciliaTableProps = GetMonthDifferenceType & {
  monthRef: string | null | undefined;
};

type FormatToBRDateType = Record<'year' | 'month' | 'day', string>;

export const useCeciliaTable = ({
  monthRef,
  endDate,
  startDate,
}: UseCeciliaTableProps) => {
  const formatMonth = (unformattedDate: string) => {
    const formatDate = new Date(unformattedDate).toLocaleDateString();
    const [month, day, year] = formatDate.split('/');
    return new Date(Number(year), Number(month) - 2, Number(day))
      .toLocaleDateString('pt-br', { month: 'long' })
      .toUpperCase();
  };

  const formattedMonthRef = monthRef
    ? formatMonth(monthRef)
    : new Date().toLocaleDateString('pt-br', { month: 'long' }).toUpperCase();

  const validateDate = (date: string) =>
    date === 'Invalid Date' ? 'dd/mm/aaaa' : date;

  const formatToBRDate = ({ year, month, day }: FormatToBRDateType) =>
    new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString(
      'pt-br',
    );

  const getDateDifference = () => {
    const validatestartDate = startDate ?? new Date().toString();
    const validateEndDate = endDate ?? new Date().toString();

    const [initialYear, initialMonth, initialDay] =
      validatestartDate.split('-');

    const [endYear, endMonth, endDay] = validateEndDate.split('-');

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
    )} (${getMonthsDifference(
      new Date(validatestartDate),
      new Date(validateEndDate),
    )}) MESES`;
  };

  const dateDifference = getDateDifference();

  return {
    data: { formattedMonthRef, dateDifference },
  };
};
