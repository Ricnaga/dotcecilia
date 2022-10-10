import { convertToBRL } from '@shared/utils/number';
import { useCalcPayments } from '@shared/hooks/useCalcPayments';
import { CalculatorPageProps } from '../../..';
import { TitleItems } from '..';

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
      title: 'valorHora',
      formattedValue: convertToBRL(getValueHour(values.salary)),
      show: true,
    },
    {
      title: 'extra60',
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
      title: 'extra100',
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
      title: 'insalubridade',
      formattedValue: convertToBRL(
        formatBRL(getUnsanitaryValue(values.minimumWage)),
      ),
      show: values.unsanitary,
    },
    {
      title: 'diasFaltados',
      formattedValue: values.missingDays,
      show: true,
    },
    {
      title: 'descontoVTR6',
      formattedValue: convertToBRL(getVTRDiscountValue(values.salary)),
      show: true,
    },
    {
      title: 'adiantamentoAnterior',
      formattedValue: convertToBRL(getPreviousAdvanceValue(values.salary)),
      show: true,
    },
    {
      title: 'descontoDiaFaltado',
      formattedValue: convertToBRL(getMissingDaysDiscount(values.salary)),
      show: true,
    },
    {
      title: 'ferias',
      formattedValue: convertToBRL(getVacationValue()),
      show: values.agreement,
    },
    {
      title: 'decimoTerceiro',
      formattedValue: convertToBRL(getVacationValue()),
      show: values.agreement,
    },
    {
      title: 'ferias1_3',
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
