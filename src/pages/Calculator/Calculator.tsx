import { PageContainer } from '@shared/components';
import { Accordion } from '@shared/components/Accordion/Accordion';
import { Agreement, Discount, ExtraHour, Unsanitary } from './components';

export function Calculator() {
  return (
    <PageContainer title="Calculadora">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <Accordion title="Hora extra">
            <ExtraHour />
          </Accordion>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Accordion title="Acerto">
            <Agreement />
          </Accordion>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Accordion title="Desconto">
            <Discount />
          </Accordion>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Accordion title="Insalubridade">
            <Unsanitary />
          </Accordion>
        </div>
      </div>
    </PageContainer>
  );
}
