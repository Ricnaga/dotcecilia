import { render } from '@testing-library/react';
import { Paystub } from './Paystub';

describe('Page: Paystub', () => {
  it('should render correctly', () => {
    const { container } = render(<Paystub />);
    expect(container).toMatchSnapshot();
  });
});
