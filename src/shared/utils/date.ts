const ONE_DAY = 24;
const ONE_HOUR = 3600;

export const getMonthsDifference = (startDate: Date, endDate: Date) => {
  const countDays =
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
    (1000 * ONE_HOUR * ONE_DAY);
  const countMonths = countDays / 30;

  if (countMonths > 30) {
    const countRestDays = countMonths % 30;

    if (countRestDays > 15) {
      const addedMonths = countRestDays + 1;

      return addedMonths.toFixed(0);
    }
  }

  return countMonths.toFixed(0);
};
