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

  const getMonthDifference = () => {
    const formatStartDate = startDate.toLocaleDateString('pt-br');
    const formatEndtDate = endDate.toLocaleDateString('pt-br');

    const countDays =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    const countMonths = countDays / 30;

    if (countMonths > 30) {
      const countRestDays = countMonths % 30;

      if (countRestDays > 15) {
        const addedMonths = countRestDays + 1;

        return `Ref. ${formatStartDate} á ${formatEndtDate} (${addedMonths.toFixed(
          0,
        )}) MESES`;
      }
    }

    return `Ref. ${formatStartDate} á ${formatEndtDate} (${countMonths.toFixed(
      0,
    )}) MESES`;
  };

  const dateDifference = getMonthDifference();

  return {
    data: { formattedMonthRef, dateDifference },
  };
};
