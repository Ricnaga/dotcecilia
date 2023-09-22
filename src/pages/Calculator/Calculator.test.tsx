import { render } from '@testing-library/react';
import { Calculator } from './Calculator';

describe('Page: Calculator', () => {
  it('should render correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
