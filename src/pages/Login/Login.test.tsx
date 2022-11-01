import { render } from '@testing-library/react';
import { LoginPage } from './Login';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));

describe('Page: Login', () => {
  it('should render correctly', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });
});
