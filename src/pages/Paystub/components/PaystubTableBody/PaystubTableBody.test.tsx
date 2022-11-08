import { render } from '@testing-library/react';
import { PaystubCalculatorFields } from '../PaystubCalculator/PaystubCalculator';
import { PaystubTableBody } from './PaystubTableBody';

const mockDate = new Date(2022, 10, 10);

const values: PaystubCalculatorFields = {
  name: '',
  hasUnsanitary: false,
  unsanitary: 0,
  extraHour: false,
  fullExtra: false,
  hours: 0,
  salary: 0,
  initialWorkdayMonth: mockDate,
  lastWorkdayMonth: mockDate,
  vtr: 0,
  missingDays: 0,
  discountedDays: 0,
};

jest.mock('./hooks/usePaystubTableBody', () => ({
  __esModule: true,
  usePaystubTableBody: () => ({
    data: {
      formattedValues: {
        salary: 'mock salary',
        hasUnsanitary: true,
        unsanitary: 'mock unsanitary',
        previousAdvance: 'mock previousAdvance',
        total: 'mock total',
        totalDiscount: 'mock totalDiscount',
        netTotal: 'mock netTotal',
      },
      formattedVtr: {
        vtr: 'mock vtr',
        vtrMonthValue: 'mock vtrMonthValue',
        vtrRef: 1000,
        discountedVtr: 'mock discountedVtr',
        dateRange: 'mock dateRange',
      },
      formattedHours: {
        hours: 10,
        extraHour: true,
        extraHourValue: 'mock extraHourValue',
        fullExtra: true,
        fullExtraValue: 'mock fullExtraValue',
      },
      formattedMissingDays: {
        missingDays: 10,
        totalMissingDays: 'mock totalMissingDays',
      },
    },
  }),
}));

describe('Components: PaystubTableBody', () => {
  it('should render correctly', () => {
    const { container } = render(
      <table>
        <PaystubTableBody values={values} />
      </table>,
    );
    expect(container).toMatchSnapshot();
  });
});
