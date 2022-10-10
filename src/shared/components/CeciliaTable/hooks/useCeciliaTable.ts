type UseCeciliaTableProps = {
  monthRef: string | null | undefined;
};
export const useCeciliaTable = ({ monthRef }: UseCeciliaTableProps) => {
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

  return {
    data: { formattedMonthRef },
  };
};
