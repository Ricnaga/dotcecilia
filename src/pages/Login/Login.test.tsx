import { render } from '@testing-library/react';
import { LoginPage } from './Login';

jest.mock('./LoginForm/LoginForm', () => ({
  __esModule: true,
  LoginForm: () => <div>Mock LoginForm</div>,
}));

describe('Page: Login', () => {
  it('should render correctly', () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });
});
