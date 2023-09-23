const MONTH_HOUR = 220;
const VTR_DISCOUNT_VALUE = 0.06;
const PREVIOUS_ADVANCE_VALUE = 0.4;
const DISCOUNT_VALUE = 30;

const MINIMUM_WAGE = 1320;
const UNSANITARY_VALUE = 0.2;

type GetExtraHourParams = Record<'salary' | 'valueHour' | 'extra', number>;

export const useCalc = () => {
  const toBRL = (value: number, currency = true) => {
    const formattedBRL = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

    if (!currency) return formattedBRL.split('R$').at(1) || '';

    return formattedBRL;
  };

  const getHourValue = (salary: number) => salary / MONTH_HOUR;

  const getVTR = (salary: number) => salary * VTR_DISCOUNT_VALUE;

  const getPreviousAdvance = (salary: number) =>
    salary * PREVIOUS_ADVANCE_VALUE;

  const getMissingDays = (salary: number) => salary / DISCOUNT_VALUE;

  const getExtraHour = ({ extra, salary, valueHour }: GetExtraHourParams) =>
    (salary / MONTH_HOUR) * valueHour * extra;

  const getUnsanitary = (value: number) =>
    value ? value * UNSANITARY_VALUE : MINIMUM_WAGE * UNSANITARY_VALUE;

  const getVacation = (salary: number, workedMonths: number) =>
    (salary / 12) * workedMonths;

  const getOneThirdVacation = (salary: number, workedMonths: number) =>
    getVacation(salary, workedMonths) / 3;

  return {
    toBRL,
    getHourValue,
    getVTR,
    getPreviousAdvance,
    getMissingDays,
    getExtraHour,
    getUnsanitary,
    getVacation,
    getOneThirdVacation,
  };
};
