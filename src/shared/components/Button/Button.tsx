import { forwardRef, useMemo } from 'react';
import { UseButtonProps, useButton } from './hooks/useButton';

type ButtonProps = UseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { buttonProps, children, spanProps } = useButton({ ...props, ref });

    const content = useMemo(
      () => children && <span {...spanProps()} />,
      [children, spanProps],
    );

    return <button {...buttonProps()}>{content}</button>;
  },
);

Button.displayName = 'DotCecilia.Button';
