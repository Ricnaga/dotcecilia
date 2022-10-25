import { OnlyBooleanKeys } from '@shared/utils/types';
import {
  render,
  fireEvent,
  screen,
  ByRoleMatcher,
  within,
} from '@testing-library/react';
import {
  CalculatorExtraHour,
  CalculatorExtraHourData,
} from './CalculatorExtraHour';

type ButtonsType = Array<
  {
    role: ByRoleMatcher;
    name: RegExp;
  } & Partial<{ value: number }>
>;

let mockExtraHour: CalculatorExtraHourData = {
  agreement: true,
  hours: 0,
  minimumWage: 0,
  salary: 0,
  unsanitary: true,
  workedMonths: 0,
};

let containerComponent: HTMLElement;

describe('Component: CalculatorExtraHour', () => {
  beforeEach(() => {
    const { container } = render(
      <CalculatorExtraHour
        extraHour={mockExtraHour}
        onChangeExtraHour={jest.fn(
          (key: keyof CalculatorExtraHourData, value: string | number) => {
            mockExtraHour = { ...mockExtraHour, [key]: value };
          },
        )}
        onCheckedExtraHour={jest.fn(
          (key: OnlyBooleanKeys<CalculatorExtraHourData>) => {
            mockExtraHour = { ...mockExtraHour, [key]: !mockExtraHour[key] };
          },
        )}
      />,
    );
    fireEvent.click(
      screen.getByRole('button', {
        name: /hora extra/i,
      }),
    );
    containerComponent = container;
  });

  it('should render correctly', () => {
    expect(containerComponent).toMatchSnapshot();
  });

  it('should test number inputs', () => {
    const spinButtons: ButtonsType = [
      {
        name: /salário/i,
        role: 'spinbutton',
        value: 1000,
      },
      {
        name: /horas/i,
        role: 'spinbutton',
        value: 10,
      },
      {
        name: /valor mínimo/i,
        role: 'spinbutton',
        value: 1000,
      },
      {
        name: /meses trabalhados/i,
        role: 'spinbutton',
        value: 10,
      },
    ];

    spinButtons.map((buttons) =>
      fireEvent.change(
        within(screen.getByText(buttons.name)).getByRole(buttons.role),
        {
          target: { valueAsNumber: buttons.value },
        },
      ),
    );

    expect(mockExtraHour.salary).toBe(1000);
    expect(mockExtraHour.hours).toBe(10);
    expect(mockExtraHour.minimumWage).toBe(1000);
    expect(mockExtraHour.workedMonths).toBe(10);
  });

  it('should test switch buttons', () => {
    const switchButtons: ButtonsType = [
      {
        role: 'switch',
        name: /insalubridade/i,
      },
      {
        role: 'switch',
        name: /acerto/i,
      },
    ];

    switchButtons.map((buttons) =>
      fireEvent.click(
        screen.getByRole(buttons.role, {
          name: buttons.name,
        }),
      ),
    );
    expect(mockExtraHour.unsanitary).toBeFalsy();
    expect(mockExtraHour.agreement).toBeFalsy();
  });
});
