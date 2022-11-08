import { ResultHook } from '@shared/utils/types';
import { act, renderHook } from '@testing-library/react';
import { useCeciliaNavbar } from './useCeciliaNavbar';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: () => jest.fn(),
}));

let resultHook: ResultHook<typeof useCeciliaNavbar>;

describe('Hook: useCeciliaNavbar', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useCeciliaNavbar());
    resultHook = result;
  });

  it('should test logOut function', () => {
    const spylogOut = jest.spyOn(resultHook.current.functions, 'logOut');

    act(() => resultHook.current.functions.logOut());

    expect(spylogOut).toHaveBeenCalled();
  });
});
