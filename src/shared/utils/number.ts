export function convertCurrencyToFloat(value: number) {
  const numbersString = value
    .toFixed(2)
    .replace(/[^0-9]/g, '')
    .padStart(3, '0');
  const floatString = numbersString.replace(/^([0-9]*?)([0-9]{2})$/, '$1.$2');
  return parseFloat(floatString);
}

export const convertToBRL = (num: number) => {
  const formattedValue = convertCurrencyToFloat(num);
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(formattedValue);
};
