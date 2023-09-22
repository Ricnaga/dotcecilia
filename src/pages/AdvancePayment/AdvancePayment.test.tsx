import { render } from '@testing-library/react';
import { AdvancePayment } from './AdvancePayment';

describe('Page: AdvancePayment', () => {
  it('should render correctly', () => {
    const { container } = render(<AdvancePayment />);
    expect(container).toMatchSnapshot();
  });
});
