import { render } from '@testing-library/react';
import { AgreementPage } from './Agreement';

describe('Page: Agreement', () => {
  it('should render correctly', () => {
    const { container } = render(<AgreementPage />);
    expect(container).toMatchSnapshot();
  });
});
