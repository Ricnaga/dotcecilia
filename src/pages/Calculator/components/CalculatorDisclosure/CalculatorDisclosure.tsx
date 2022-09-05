import { Disclosure, Transition } from '@headlessui/react';

type CalculatorDisclosureProps = {
  title: string;
  children: React.ReactNode;
};
export function CalculatorDisclosure({
  title,
  children,
}: CalculatorDisclosureProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <p className="accordion-title">{title}</p>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static>{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
