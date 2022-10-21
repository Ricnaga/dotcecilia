import { render } from '@testing-library/react';
import { AdvancePaymentPage } from './AdvancePayment';

describe('Page: AdvancePayment', () => {
  it('should render correctly', () => {
    const { container } = render(<AdvancePaymentPage />);
    expect(container).toMatchSnapshot();
  });
});
