import { getFieldsForElasticSearch } from './elasticSearch';

describe('getFieldsForElasticSearch', () => {
  const testData = [
    { name: 'BelarusBank', coordinates: [27.653504, 53.895249], currencies: ['BTC', 'YEN', 'BYN', 'USD', 'POL'] },
    { name: 'BankDabrabyt', coordinates: [27.623765, 53.875351], currencies: ['USD', 'YUAN', 'BYN', 'USD'] },
    { name: 'PriorBank', coordinates: [27.647679, 53.891623], currencies: ['YUAN', 'ETH', 'BYN'] },
    { name: 'BelGazPromBank', coordinates: [27.674889, 53.859294], currencies: ['CAD', 'EUR', 'BTC', 'YEN'] },
    { name: 'AlphaBank', coordinates: [27.608922, 53.941846], currencies: ['USD', 'POL', 'BTC'] },
  ];

  test('should return an array of unique fields', () => {
    expect(getFieldsForElasticSearch(testData, 'USD')).toEqual(['USD']);
    expect(getFieldsForElasticSearch(testData, 'BYN')).toEqual(['BYN']);
    expect(getFieldsForElasticSearch(testData, 'P')).toEqual(['POL', 'PriorBank', 'BelGazPromBank', 'AlphaBank']);
  });

  test('should return an array with "Not found" if no matching fields are found', () => {
    expect(getFieldsForElasticSearch(testData, 'btcc')).toEqual(['Not found']);
    expect(getFieldsForElasticSearch(testData, '123')).toEqual(['Not found']);
  });

  test('should handle case-insensitive matching', () => {
    expect(getFieldsForElasticSearch(testData, 'usd')).toEqual(['USD']);
    expect(getFieldsForElasticSearch(testData, 'bYn')).toEqual(['BYN']);
  });
});
