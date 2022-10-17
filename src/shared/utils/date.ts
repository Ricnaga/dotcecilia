type WorkDaysInMonthType = Record<'year' | 'month' | 'day', number>;

const ONE_DAY = 24;
const ONE_HOUR = 3600;

export const getWorkDaysInMonth = ({ day, month, year }: WorkDaysInMonthType) =>
  new Array<number>(day)
    .fill(Math.round(Math.random()))
    .reduce((accumulator, __, index) => {
      const weekDay = new Date(year, month - 1, index + 1).getDay();

      return weekDay !== 0 && weekDay !== 6 ? accumulator + 1 : accumulator;
    }, 0);

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
