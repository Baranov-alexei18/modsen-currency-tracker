import { getFieldsForElasticSearch } from './elasticSearch';

describe('getFieldsForElasticSearch', () => {
  const testData = [
    { name: 'BelarusBank', coordinates: [27.653504, 53.895249], currencies: ['BTC', 'YEN', 'BYN', 'USD', 'POL'] },
    { name: 'BankDabrabyt', coordinates: [27.623765, 53.875351], currencies: ['USD', 'YUAN', 'BYN', 'USD'] },
    { name: 'PriorBank', coordinates: [27.647679, 53.891623], currencies: ['YUAN', 'ETH', 'BYN'] },
    { name: 'BelGazPromBank', coordinates: [27.674889, 53.859294], currencies: ['CAD', 'EUR', 'BTC', 'YEN'] },
    { name: 'AlphaBank', coordinates: [27.608922, 53.941846], currencies: ['USD', 'POL', 'BTC'] },
  ];

  test('should return an array of all unique fields if empty fields', () => {
    const resultSearch = ['BelarusBank', 27.653504, 53.895249, 'BTC', 'YEN', 'BYN', 'USD', 'POL', 'BankDabrabyt', 27.623765, 53.875351, 'YUAN', 'PriorBank', 27.647679, 53.891623, 'ETH', 'BelGazPromBank', 27.674889, 53.859294, 'CAD', 'EUR', 'AlphaBank', 27.608922, 53.941846];
    expect(getFieldsForElasticSearch(testData, '')).toEqual(resultSearch);
  });

  test('should return an array of unique fields', () => {
    expect(getFieldsForElasticSearch(testData, 'USD')).toEqual(['USD']);
    expect(getFieldsForElasticSearch(testData, 'BYN')).toEqual(['BYN']);
    expect(getFieldsForElasticSearch(testData, 'P')).toEqual(['POL', 'PriorBank', 'BelGazPromBank', 'AlphaBank']);
  });

  test('should return ["Not found"] if no matching fields', () => {
    expect(getFieldsForElasticSearch(testData, 'btcc')).toEqual(['Not found']);
    expect(getFieldsForElasticSearch(testData, '123')).toEqual(['Not found']);
  });

  test('should return fieldes if value is any register', () => {
    expect(getFieldsForElasticSearch(testData, 'usD')).toEqual(['USD']);
    expect(getFieldsForElasticSearch(testData, 'usd')).toEqual(['USD']);
    expect(getFieldsForElasticSearch(testData, 'BYn')).toEqual(['BYN']);
    expect(getFieldsForElasticSearch(testData, 'BYN')).toEqual(['BYN']);
  });
});
