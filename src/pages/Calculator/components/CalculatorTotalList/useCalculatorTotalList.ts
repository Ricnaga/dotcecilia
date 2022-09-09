import { CalculatorPageProps } from '../..';
import {
  convertToCurrencyFloat,
  convertToBRL,
} from '../../../../shared/utils/number';
import { TitleItems } from '.';

const MINIMUM_WAGE = 120000; // pela lei o valor do salário mínimo é R$ 1200,00
const MONTH_HOUR = convertToCurrencyFloat(22000); // pela lei o valor da hora/mês é 220
const VTR_DISCOUNT_VALUE = 0.06; // pela lei o valor do desconto do VTR é 6%
const PREVIOUS_ADVANCE_VALUE = 0.4; // pela lei o valor do adiantamento anterior é 40%
const UNSANITARY_VALUE = 0.2; // pela lei o valor insalubridade é 2f0%

export const useCalculatorTotalList = (values: CalculatorPageProps) => {
  const formatSalary = () => convertToCurrencyFloat(values.salary);

  const getValueHour = () => formatSalary() / MONTH_HOUR;

  const getExtraHourPercentage = (percentage: number) =>
    getValueHour() * values.hours * percentage;

  const getUnsanitaryValue = (minimumWage: number) =>
    minimumWage
      ? convertToCurrencyFloat(minimumWage) * UNSANITARY_VALUE
      : convertToCurrencyFloat(MINIMUM_WAGE) * UNSANITARY_VALUE;

  const getVTRDiscountValue = () => formatSalary() * VTR_DISCOUNT_VALUE;

  const getPreviousAdvanceValue = () => formatSalary() * PREVIOUS_ADVANCE_VALUE;

  const getVacationValue = () => (formatSalary() / 12) * values.workedMonths;

  const getOneThirdVacationValue = () =>
    getVacationValue() * values.workedMonths * 3;

  const totalListItems: Array<TitleItems> = [
    {
      title: 'Valor/hora',
      formattedValue: convertToBRL(getValueHour()),
      show: true,
    },
    {
      title: '60%',
      formattedValue: convertToBRL(getExtraHourPercentage(1.6)),
      show: true,
    },
    {
      title: '100%',
      formattedValue: convertToBRL(getExtraHourPercentage(2)),
      show: true,
    },
    {
      title: 'Insalubridade',
      formattedValue: convertToBRL(getUnsanitaryValue(values.minimumWage)),
      show: values.unsanitary,
    },
    {
      title: 'Transporte',
      formattedValue: convertToBRL(values.transportValue),
      show: true,
    },
    {
      title: 'Dias faltados',
      formattedValue: values.missingDays,
      show: true,
    },
    {
      title: 'Desconto 6% VTR',
      formattedValue: convertToBRL(getVTRDiscountValue()),
      show: true,
    },
    {
      title: 'Adiantamento anterior',
      formattedValue: convertToBRL(getPreviousAdvanceValue()),
      show: true,
    },
    {
      title: 'Desconto',
      formattedValue: convertToBRL(values.salary),
      show: true,
    },
    {
      title: 'Férias',
      formattedValue: convertToBRL(getVacationValue()),
      show: values.agreement,
    },
    {
      title: '13º',
      formattedValue: convertToBRL(getVacationValue()),
      show: values.agreement,
    },
    {
      title: 'Férias - 1/3',
      formattedValue: convertToBRL(getOneThirdVacationValue()),
      show: values.agreement,
    },
  ];

  return {
    data: {
      totalListItems,
    },
  };
};
