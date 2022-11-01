import { ResultHook } from '@shared/utils/types';
import { act, renderHook } from '@testing-library/react';
import { FormFields } from '../LoginForm';
import { useLoginForm } from './useLoginForm';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: () => jest.fn(),
}));

jest.mock('@config', () => ({
  __esModule: true,
  ENV_USER: '',
  ENV_PASSWORD: '',
}));

type FormikValues = Record<keyof typeof FormFields, string>;

let resultHook: ResultHook<typeof useLoginForm>;

describe('Hook: useLoginForm', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useLoginForm());
    resultHook = result;
  });

  it('should test submit function', () => {
    const spyOnSubmit = jest.spyOn(resultHook.current.functions, 'onSubmit');

    const values: FormikValues = {
      [FormFields.name]: '',
      [FormFields.password]: '',
    };

    act(() => resultHook.current.functions.onSubmit(values));

    expect(spyOnSubmit).toHaveBeenCalled();
  });
});
