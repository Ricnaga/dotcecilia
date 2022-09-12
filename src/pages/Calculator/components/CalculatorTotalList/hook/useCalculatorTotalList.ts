import { CalculatorPageProps } from '../../..';
import { convertToBRL } from '../../../../../shared/utils/number';
import { TitleItems } from '..';
import { useCalcPayments } from '../../../../../shared/hooks/useCalcPayments';

export const useCalculatorTotalList = (values: CalculatorPageProps) => {
  const {
    functions: {
      formatBRL,
      getExtraHour,
      getUnsanitaryValue,
      getPreviousAdvanceValue,
      getVTRDiscountValue,
      getValueHour,
      getMissingDaysDiscount,
    },
  } = useCalcPayments();

  const getVacationValue = () =>
    (formatBRL(values.salary) / 12) * values.workedMonths;

  const getOneThirdVacationValue = () => getVacationValue() / 3;

  const totalListItems: Array<TitleItems> = [
    {
      title: 'Valor/hora',
      formattedValue: convertToBRL(getValueHour(values.salary)),
      show: true,
    },
    {
      title: '60%',
      formattedValue: convertToBRL(
        getExtraHour({
          hours: values.hours,
          percentage: 1.6,
          money: values.salary,
        }),
      ),
      show: true,
    },
    {
      title: '100%',
      formattedValue: convertToBRL(
        getExtraHour({
          hours: values.hours,
          percentage: 2,
          money: values.salary,
        }),
      ),
      show: true,
    },
    {
      title: 'Insalubridade',
      formattedValue: convertToBRL(getUnsanitaryValue(values.minimumWage)),
      show: values.unsanitary,
    },
    {
      title: 'Dias faltados',
      formattedValue: values.missingDays,
      show: true,
    },
    {
      title: 'Desconto 6% VTR',
      formattedValue: convertToBRL(getVTRDiscountValue(values.salary)),
      show: true,
    },
    {
      title: 'Adiantamento anterior',
      formattedValue: convertToBRL(getPreviousAdvanceValue(values.salary)),
      show: true,
    },
    {
      title: 'Desconto do dia faltado',
      formattedValue: convertToBRL(getMissingDaysDiscount(values.salary)),
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
