import React from 'react';

type CeciliaButtonButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    className?: string;
  };

export function CeciliaButton({
  title,
  className,
  ...props
}: CeciliaButtonButtonProps) {
  return (
    <button className={`btn btn-yellow ${className}`} type="button" {...props}>
      {title}
    </button>
  );
}
