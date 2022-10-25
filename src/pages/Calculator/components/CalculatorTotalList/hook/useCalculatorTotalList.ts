import { convertToBRL } from '@shared/utils/number';
import { useCalcPayments } from '@shared/hooks/useCalcPayments';
import { TitleItems } from '@shared/utils/types';
import { CalculatorPageProps } from '../../../Calculator';
import { listTitle } from '../CalculatorTotalList';

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
      getOneThirdVacationValue,
      getVacationValue,
    },
  } = useCalcPayments();

  const totalListItems: TitleItems<typeof listTitle, { show: boolean }> = [
    {
      title: 'valorHora',
      value: convertToBRL(getValueHour(values.salary)),
      show: true,
    },
    {
      title: 'extra60',
      value: convertToBRL(
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
      value: convertToBRL(
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
      value: convertToBRL(formatBRL(getUnsanitaryValue(values.minimumWage))),
      show: values.unsanitary,
    },
    {
      title: 'diasFaltados',
      value: values.missingDays,
      show: true,
    },
    {
      title: 'descontoVTR6',
      value: convertToBRL(getVTRDiscountValue(values.salary)),
      show: true,
    },
    {
      title: 'adiantamentoAnterior',
      value: convertToBRL(getPreviousAdvanceValue(values.salary)),
      show: true,
    },
    {
      title: 'descontoDiaFaltado',
      value: convertToBRL(getMissingDaysDiscount(values.salary)),
      show: true,
    },
    {
      title: 'ferias',
      value: convertToBRL(getVacationValue(values.salary, values.workedMonths)),
      show: values.agreement,
    },
    {
      title: 'decimoTerceiro',
      value: convertToBRL(getVacationValue(values.salary, values.workedMonths)),
      show: values.agreement,
    },
    {
      title: 'ferias1_3',
      value: convertToBRL(
        getOneThirdVacationValue(values.salary, values.workedMonths),
      ),
      show: values.agreement,
    },
  ];

  return {
    data: {
      totalListItems,
    },
  };
};
