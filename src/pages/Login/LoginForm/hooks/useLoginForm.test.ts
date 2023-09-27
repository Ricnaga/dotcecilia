import { ResultHook } from '@shared/utils/types';
import { renderHook } from '@testing-library/react';
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

let resultHook: ResultHook<typeof useLoginForm>;

describe('Hook: useLoginForm', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useLoginForm());
    resultHook = result;
  });

  it('should test data', () => {
    expect(resultHook.current.data).toBeDefined();
  });
});
