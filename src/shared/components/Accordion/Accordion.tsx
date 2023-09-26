import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { forwardRef, useMemo } from 'react';
import { UseAccordionProps, useAccordion } from './hooks/useAccordion';

type AccordionProps = UseAccordionProps;

export const Accordion = forwardRef<HTMLDetailsElement, AccordionProps>(
  (props, ref) => {
    const { contentProps, detailsProps, summaryProps, title } = useAccordion({
      ...props,
      ref,
    });

    const summaryTitle = useMemo(
      () => (
        <>
          {title && <p className="grow">{title}</p>}
          <ChevronUpIcon
            width={24}
            className="group-open:animate-rotate-180 group-open:rotate-180 animate-rotate-0"
          />
        </>
      ),
      [],
    );

    return (
      <details {...detailsProps()}>
        <summary {...summaryProps()}>{summaryTitle}</summary>
        <div {...contentProps()} />
      </details>
    );
  },
);

Accordion.displayName = 'DotCecilia.Accordion';
