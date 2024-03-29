import { PropsWithChildren } from 'react';

export function PageContainer({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div>
      {title && (
        <p className="text-5xl font-bold mt-8 mb-6 text-center lg:text-left">
          {title}
        </p>
      )}
      {children}
    </div>
  );
}
