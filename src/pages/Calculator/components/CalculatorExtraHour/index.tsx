import { Disclosure, Transition } from '@headlessui/react';
import { CeciliaText, CeciliaCheckbox } from '../../../../shared/components';

export function CalculatorExtraHour() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <p className="accordion-title">Hora extra</p>
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
              <div className="accordion-content items-end">
                <div className="col-span-3">
                  <CeciliaText label="Salário" placeholder="R$" />
                </div>
                <div className="col-span-3">
                  <CeciliaText label="Horas" placeholder="Horas" />
                </div>
                <div className="col-span-3">
                  <CeciliaCheckbox label="Insalubridade" />
                  <CeciliaText
                    label="Salário mínimo"
                    placeholder="R$ 1200,00"
                  />
                </div>
                <div className="col-span-3">
                  <CeciliaCheckbox label="Acerto" />
                  <CeciliaText label="Meses trabalhados" placeholder="Meses" />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
