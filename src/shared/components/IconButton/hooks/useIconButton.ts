import { CallBackProps } from '@shared/utils/types';
import { ComponentProps, Ref, useCallback } from 'react';

type ButtonProps = CallBackProps<'button'>;

export interface UseIconButtonProps
  extends Omit<ComponentProps<'button'>, 'className'> {
  ref?: Ref<HTMLButtonElement>;
}

export const useIconButton = ({ ...baseProps }: UseIconButtonProps) => {
  const buttonProps: ButtonProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      className: 'icon-button',
    }),
    [baseProps],
  );

  return { buttonProps };
};
