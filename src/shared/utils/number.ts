export function convertToCurrencyFloat(value: number) {
  const numbersString = value
    .toString()
    .replace(/[^0-9]/g, '')
    .padStart(3, '0');
  const floatString = numbersString.replace(/^([0-9]*?)([0-9]{2})$/, '$1.$2');
  return parseFloat(floatString);
}

export const convertToBRL = (num: number, currency = true) => {
  const formattedBRL = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(num);

  if (!currency) return formattedBRL.split('R$').at(1);

  return formattedBRL;
};

export const currencyStringToFloat = (currencyString: string) =>
  parseFloat(currencyString);
