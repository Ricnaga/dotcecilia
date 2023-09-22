import { render } from '@testing-library/react';
import { Agreement } from './Agreement';

describe('Page: Agreement', () => {
  it('should render correctly', () => {
    const { container } = render(<Agreement />);
    expect(container).toMatchSnapshot();
  });
});
