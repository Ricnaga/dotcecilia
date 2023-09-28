import { CallBackProps } from '@shared/utils/types';
import { ComponentProps, Ref, useCallback } from 'react';

type InputProps = CallBackProps<'input'>;
type DivProps = CallBackProps<'div'>;
type SpanProps = CallBackProps<'span'>;
type LabelProps = CallBackProps<'label'>;

export interface UseSwitchProps extends ComponentProps<'input'> {
  ref?: Ref<HTMLInputElement>;
  label?: string;
}

export const useSwitch = ({ label, ...baseProps }: UseSwitchProps) => {
  const containerProps: DivProps = useCallback(
    (props = {}) => ({
      ...props,
      className: 'flex items-center gap-2',
    }),
    [],
  );

  const labelProps: SpanProps = useCallback(
    (props = {}) => ({
      ...props,
      className: 'text-lg leading-6 font-medium',
    }),
    [],
  );

  const wrapperProps: LabelProps = useCallback(
    (props = {}) => ({
      ...props,
      className: 'checkbox-container',
    }),
    [],
  );

  const innerWrapperProps: DivProps = useCallback(
    (props = {}) => ({
      ...props,
      className:
        'checkbox-button peer peer-checked:bg-teal-700 peer-checked:after:translate-x-full peer-checked:after:border-teal-700 peer-focus:ring-green-800',
    }),
    [],
  );

  const inputProps: InputProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      id: label,
      type: 'checkbox',
      className: 'peer sr-only',
    }),
    [baseProps, label],
  );

  return {
    inputProps,
    containerProps,
    labelProps,
    wrapperProps,
    innerWrapperProps,
    label,
  };
};
