type WorkDaysInMonthType = Record<'year' | 'month' | 'day', number>;

export const getWorkDaysInMonth = ({ day, month, year }: WorkDaysInMonthType) =>
  new Array<number>(day)
    .fill(Math.round(Math.random()))
    .reduce((accumulator, __, index) => {
      const weekDay = new Date(year, month - 1, index + 1).getDay();
      if (weekDay !== 0 && weekDay !== 6) return accumulator + 1;

      return accumulator;
    }, 0);
