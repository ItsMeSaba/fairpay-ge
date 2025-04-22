type Currency = 'eur' | 'usd' | 'gel';

export function getCurrency(currency: Currency) {
  switch (currency) {
    case 'eur':
      return '€';

    case 'usd':
      return '$';

    default:
      return '₾';
  }
}
