import { Disclosure, Transition } from '@headlessui/react';
import { CeciliaText } from '../../../../shared/components';

export function CalculatorDiscount() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <p className="accordion-title">Desconto</p>
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
            <Disclosure.Panel static>
              <div className="accordion-content">
                <div className="col-span-4">
                  <p className="text-2xl">Dias faltados</p>
                  <CeciliaText placeholder="Dias" />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
