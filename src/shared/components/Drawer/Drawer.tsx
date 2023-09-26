import { XMarkIcon } from '@heroicons/react/20/solid';
import { PropsWithChildren, forwardRef } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { UseDrawerProps, useDrawer } from './hooks/useDrawer';

interface DrawerProps extends UseDrawerProps {}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { children, drawerProps, onClose } = useDrawer({ ...props, ref });

  return (
    <section {...drawerProps()}>
      <div className="flex justify-end">
        <IconButton onClick={onClose}>
          <XMarkIcon width={24} />
        </IconButton>
      </div>
      <div>{children}</div>
    </section>
  );
});

Drawer.displayName = 'DotCecilia.Drawer';
