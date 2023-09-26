import { CallBackProps } from '@shared/utils/types';
import { PropsWithChildren, Ref, useCallback } from 'react';

export interface UseAccordionProps
  extends PropsWithChildren<{ title?: string }> {
  ref?: Ref<HTMLDetailsElement>;
}

export const useAccordion = ({
  title,
  children,
  ...baseProps
}: UseAccordionProps) => {
  const detailsProps: CallBackProps<'details'> = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      className: 'accordion-container group',
    }),
    [baseProps],
  );

  const summaryProps: CallBackProps<'summary'> = useCallback(
    (props = {}) => ({
      ...props,
      className: 'accordion-summary',
    }),
    [],
  );

  const contentProps: CallBackProps<'div'> = useCallback(
    (props = {}) => ({
      ...props,
      className: 'accordion-core group-open:animate-soft-slide',
      children,
    }),
    [],
  );

  return { detailsProps, summaryProps, contentProps, title };
};
