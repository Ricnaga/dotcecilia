import { ResultHook } from '@shared/utils/types';
import { renderHook } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { act } from 'react-dom/test-utils';
import { FormFields } from '../LoginForm';
import { useLoginForm } from './useLoginForm';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));

describe('Hook: useFormLogin', () => {
  let resultHook: ResultHook<typeof useLoginForm>;

  beforeEach(() => {
    const { result } = renderHook(() => useLoginForm());
    resultHook = result;
  });

  it('should be able to get data from hook', () => {
    const mockObject = {
      [FormFields.name]: '',
      [FormFields.password]: '',
    };

    expect(resultHook.current.data.values).toMatchObject(mockObject);
  });
  it('should be able to get functions from hook', () => {
    const spyOnChange = jest.spyOn(resultHook.current.functions, 'onChange');

    const spyOnSubmit = jest.spyOn(resultHook.current.functions, 'onSubmit');

    const mockEvent: ChangeEvent = {
      target: {} as Element,
      nativeEvent: {} as Event,
      currentTarget: {} as Element,
      bubbles: false,
      cancelable: false,
      defaultPrevented: false,
      eventPhase: 0,
      isTrusted: false,
      preventDefault: jest.fn(),
      isDefaultPrevented: jest.fn(),
      stopPropagation: jest.fn(),
      isPropagationStopped: jest.fn(),
      persist: jest.fn(),
      timeStamp: 0,
      type: '',
    };

    act(() => resultHook.current.functions.onChange(mockEvent));
    act(() => resultHook.current.functions.onSubmit());

    expect(spyOnChange).toHaveBeenCalled();
    expect(spyOnSubmit).toHaveBeenCalled();
  });
});
