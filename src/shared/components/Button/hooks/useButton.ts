import { CallBackProps } from '@shared/utils/types';
import { ComponentProps, Ref, useCallback } from 'react';

enum Variants {
  center = 'center',
  slide = 'slide',
  skew = 'skew',
  swipe = 'swipe',
  curtain = 'curtain',
  smoosh = 'smoosh',
  hide = 'hide',
}

export interface UseButtonProps extends ComponentProps<'button'> {
  ref?: Ref<HTMLButtonElement>;
  variants?: keyof typeof Variants;
}

type ButtonProps = CallBackProps<'button'>;

type SpanProps = CallBackProps<'span'>;

export const useButton = ({
  variants = 'curtain',
  children,
  ...baseProps
}: UseButtonProps) => {
  const buttonProps: ButtonProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      'data-variants': variants,
    }),
    [baseProps, variants],
  );

  const spanProps: SpanProps = useCallback(
    (props = {}) => ({
      ...props,
      'data-text': 'default',
      children,
    }),
    [variants, children],
  );

  return {
    buttonProps,
    children,
    spanProps,
  };
};
