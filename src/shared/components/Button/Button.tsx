import { ComponentProps } from 'react';

enum Variants {
  center = 'center',
  slide = 'slide',
  skew = 'skew',
  swipe = 'swipe',
  curtain = 'curtain',
  smoosh = 'smoosh',
  hide = 'hide',
}

interface ButtonProps extends ComponentProps<'button'> {
  variants?: keyof typeof Variants;
}

export function Button({
  variants = 'curtain',
  children,
  ...props
}: ButtonProps) {
  return (
    <button data-variants={variants} {...props}>
      {children && <span data-text="default">{children}</span>}
    </button>
  );
}
