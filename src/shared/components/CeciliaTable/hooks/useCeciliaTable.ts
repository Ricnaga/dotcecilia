import { getMonthsDifference } from '@shared/utils/date';

type GetMonthDifferenceType = Record<'startDate' | 'endDate', Date>;

type UseCeciliaTableProps = GetMonthDifferenceType & {
  monthRef: string | null | undefined;
};

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

  const getDateDifference = () => {
    const formatStartDate = startDate.toLocaleDateString('pt-br');
    const formatEndtDate = endDate.toLocaleDateString('pt-br');

    return `Ref. ${formatStartDate} á ${formatEndtDate} (${getMonthsDifference(
      startDate,
      endDate,
    )}) MESES`;
  };

  const dateDifference = getDateDifference();

  return {
    data: { formattedMonthRef, dateDifference },
  };
};
