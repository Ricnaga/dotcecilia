import { render } from '@testing-library/react';
import { CalculatorPage } from './Calculator';

describe('Page: Calculator', () => {
  it('should render correctly', () => {
    const { container } = render(<CalculatorPage />);
    expect(container).toMatchSnapshot();
  });
});
