import { PropsWithChildren } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

type AccordionProps = PropsWithChildren<{ title?: string }>;

export function Accordion({ children, title }: AccordionProps) {
  return (
    <details className="accordion-container group">
      <summary className="accordion-summary">
        {title && <p className="flex flex-grow">{title}</p>}
        <ChevronUpIcon
          width={24}
          className="group-open:animate-rotate-180 group-open:rotate-180 animate-rotate-0"
        />
      </summary>
      <div className="accordion-core group-open:animate-slide">{children}</div>
    </details>
  );
}
