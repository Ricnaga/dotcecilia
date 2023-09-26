import { forwardRef } from 'react';
import { UseIconButtonProps, useIconButton } from './hooks/useIconButton';

type IconButtonProps = UseIconButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { buttonProps } = useIconButton({ ...props, ref });
    return <button {...buttonProps()} />;
  },
);

IconButton.displayName = 'DotCecilia.IconButton';
