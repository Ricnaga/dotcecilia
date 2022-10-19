import { render } from '@testing-library/react';
import {
  PaystubCalculator,
  PaystubCalculatorFields,
} from './PaystubCalculator';

describe('Components: PaystubCalculator', () => {
  it('should render correctly', () => {
    const mockValues: PaystubCalculatorFields = {
      name: '',
      hasUnsanitary: false,
      unsanitary: 0,
      extraHour: false,
      fullExtra: false,
      hours: 0,
      salary: 0,
      initialWorkdayMonth: new Date(),
      lastWorkdayMonth: new Date(),
      vtr: 0,
      missingDays: 0,
      discountedDays: 0,
    };

    const { container } = render(
      <PaystubCalculator
        values={mockValues}
        onChange={jest.fn()}
        onPrint={jest.fn()}
        onChecked={jest.fn()}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
