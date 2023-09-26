import { CallBackProps } from '@shared/utils/types';
import { ComponentProps, PropsWithChildren, Ref, useCallback } from 'react';

export interface UseDrawerProps
  extends ComponentProps<'section'>,
    PropsWithChildren {
  ref?: Ref<HTMLDivElement>;
  isOpen: boolean;
  onClose: () => void;
}

type DrawerProps = CallBackProps<'section'>;

export const useDrawer = ({
  isOpen,
  onClose,
  children,
  ...baseProps
}: UseDrawerProps) => {
  const drawerProps: DrawerProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      'data-open': isOpen,
      className: 'drawer-wrapper',
    }),
    [baseProps, isOpen],
  );

  return {
    drawerProps,
    children,
    onClose,
  };
};
