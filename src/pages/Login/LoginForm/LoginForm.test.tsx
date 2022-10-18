import { render } from '@testing-library/react';
import { LoginForm } from './LoginForm';

jest.mock('./hooks/useLoginForm', () => ({
  __esModule: true,
  useLoginForm: () => ({
    data: {
      values: {
        mockName: 'mockName',
        mockPassword: 'mockPassword',
      },
    },
    functions: {
      onChange: jest.fn(),
      onSubmit: jest.fn(),
    },
  }),
}));

describe('Component: LoginForm ', () => {
  it('should render correctly', () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
});
