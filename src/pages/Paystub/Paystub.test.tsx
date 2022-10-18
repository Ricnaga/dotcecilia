import { render } from '@testing-library/react';
import { PaystubPage } from './Paystub';

describe('Page: PaystubPage', () => {
  it('should render correctly', () => {
    const { container } = render(<PaystubPage />);
    expect(container).toMatchSnapshot();
  });
});
