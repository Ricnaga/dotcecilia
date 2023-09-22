import { render } from '@testing-library/react';
import { Navbar } from './Navbar';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));

describe('Component: Navbar', () => {
  it('should render correctly', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
