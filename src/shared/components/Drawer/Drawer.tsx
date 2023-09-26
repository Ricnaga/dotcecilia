import { PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { IconButton } from '../IconButton/IconButton';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Drawer({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<DrawerProps>) {
  return (
    <section data-open={isOpen} className="drawer-wrapper">
      <div className="flex justify-end">
        <IconButton onClick={onClose}>
          <XMarkIcon width={24} />
        </IconButton>
      </div>
      <div>{children}</div>
    </section>
  );
}
