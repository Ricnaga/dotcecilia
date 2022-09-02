import React from 'react';

type CeciliaButtonButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
  };

export function CeciliaButton({
  type = 'button',
  title,
  className,
  ...props
}: CeciliaButtonButtonProps) {
  return (
    <button className={`btn btn-yellow ${className}`} type={type} {...props}>
      {title}
    </button>
  );
}
