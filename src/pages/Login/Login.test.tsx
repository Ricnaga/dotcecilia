import { render } from '@testing-library/react';
import { Login } from './Login';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));

describe('Page: Login', () => {
  it('should render correctly', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
