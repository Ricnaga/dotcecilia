import React from 'react';

type CeciliaButtonButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    type?: 'submit' | 'reset' | 'button';
  };

export function CeciliaButton({
  type = 'button',
  title,
  ...props
}: CeciliaButtonButtonProps) {
  return (
    <button
      className="w-full px-4 py-2 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none focus:ring focus:ring-sky-900 rounded font-bold text-2xl"
      type={type}
      {...props}
    >
      {title}
    </button>
  );
}
