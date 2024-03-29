import { getResultConverter } from './converter';

describe('getResultConverter', () => {
  const currencyData = [
    { code: 'USD', value: 1 },
    { code: 'EUR', value: 0.85 },
    { code: 'BYN', value: 3.2 },
  ];

  test('should return the same value if baseCurrency and convertCurrency are the same', () => {
    expect(getResultConverter('USD', 'USD', '10', currencyData)).toBe('10');
  });

  test('should correctly convert values', () => {
    expect(getResultConverter('USD', 'EUR', '10', currencyData)).toBe('8.50');
    expect(getResultConverter('BYN', 'USD', '10', currencyData)).toBe('3.13');
    expect(getResultConverter('EUR', 'BYN', '10', currencyData)).toBe('37.65');
  });

  test('should handle invalid input values gracefully', () => {
    expect(getResultConverter('USD', 'EUR', 'invalid', currencyData)).toBe('');
    expect(getResultConverter('USD', 'EUR', 'NaN', currencyData)).toBe('');
  });
});
