import { render } from '@testing-library/react';
import { PaystubPage } from './Paystub';

describe('Page: Paystub', () => {
  it('should render correctly', () => {
    const { container } = render(<PaystubPage />);
    expect(container).toMatchSnapshot();
  });
});
