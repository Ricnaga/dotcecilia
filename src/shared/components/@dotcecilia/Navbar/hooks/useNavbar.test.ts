import { ResultHook } from '@shared/utils/types';
import { act, renderHook } from '@testing-library/react';
import { useNavbar } from './useNavbar';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: () => jest.fn(),
}));

let resultHook: ResultHook<typeof useNavbar>;

describe('Hook: useNavbar', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useNavbar());
    resultHook = result;
  });

  it('should test logOut function', () => {
    const spylogOut = jest.spyOn(resultHook.current.functions, 'logOut');

    act(() => resultHook.current.functions.logOut());

    expect(spylogOut).toHaveBeenCalled();
  });
});
