import { convertToCurrencyFloat } from '../utils/number';

const MINIMUM_WAGE = 120000; // pela lei o valor do salário mínimo é R$ 1200,00
const MONTH_HOUR = convertToCurrencyFloat(22000); // pela lei o valor da hora/mês é 220
const VTR_DISCOUNT_VALUE = 0.06; // pela lei o valor do desconto do VTR é 6%
const DISCOUNT_VALUE = 30; // pela lei o valor do desconto é 30 dias
const PREVIOUS_ADVANCE_VALUE = 0.4; // pela lei o valor do adiantamento anterior é 40%
const UNSANITARY_VALUE = 0.2; // pela lei o valor insalubridade é 20%

type GetExtraHourItems = Record<'percentage' | 'money' | 'hours', number>;

export const useCalcPayments = () => {
  const formatBRL = (money: number) => convertToCurrencyFloat(money);
  const getValueHour = (money: number) => money / MONTH_HOUR;

  const getExtraHour = ({ hours, percentage, money }: GetExtraHourItems) => {
    const extraHourValue = (getValueHour(money) * hours * percentage) / 100;
    const formatToCurrencyString = extraHourValue.toFixed(2);
    return parseFloat(formatToCurrencyString);
  };

  const getUnsanitaryValue = (minimumWage: number) =>
    minimumWage
      ? minimumWage * UNSANITARY_VALUE
      : MINIMUM_WAGE * UNSANITARY_VALUE;

  const getPreviousAdvanceValue = (salary: number) =>
    formatBRL(salary) * PREVIOUS_ADVANCE_VALUE;

  const getVTRDiscountValue = (salary: number) =>
    formatBRL(salary) * VTR_DISCOUNT_VALUE;

  const getMissingDaysDiscount = (salary: number) =>
    formatBRL(salary) / DISCOUNT_VALUE;

  return {
    functions: {
      formatBRL,
      getValueHour,
      getExtraHour,
      getUnsanitaryValue,
      getPreviousAdvanceValue,
      getVTRDiscountValue,
      getMissingDaysDiscount,
    },
  };
};
