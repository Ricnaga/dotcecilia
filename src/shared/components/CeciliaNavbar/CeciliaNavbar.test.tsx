import { render } from '@testing-library/react';
import { CeciliaNavbar } from './CeciliaNavbar';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));

describe('Component: CeciliaNavbar', () => {
  it('should render correctly', () => {
    const { container } = render(<CeciliaNavbar />);
    expect(container).toMatchSnapshot();
  });
});
