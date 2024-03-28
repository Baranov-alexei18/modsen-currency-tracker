import {
  formatDate, getDateDayAgo, getTimeLastUpdate, isYestardayDay,
} from './date';

describe('isYestardayDay', () => {
  test('returns true if the input date is yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateString = yesterday.toISOString().split('T')[0];

    expect(isYestardayDay(dateString)).toBe(true);
  });

  test('returns false if the input date is today', () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];

    expect(isYestardayDay(dateString)).toBe(false);
  });

  test('returns false if the input date is tommorow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];

    expect(isYestardayDay(dateString)).toBe(false);
  });
});

describe('getDateDayAgo', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should return the correct date string for 1 day ago', () => {
    const mockDateNow = new Date('2024-03-19T12:00:00Z');
    const spyDate = jest.spyOn(global, 'Date').mockImplementation(() => mockDateNow);

    expect(getDateDayAgo(1)).toBe('2024-03-18T12:00:00');
    spyDate.mockRestore();
  });

  test('should return the correct date string for 7 days ago', () => {
    const mockDateNow = new Date('2024-03-19T12:00:00Z');
    const spyDate = jest.spyOn(global, 'Date').mockImplementation(() => mockDateNow);

    expect(getDateDayAgo(7)).toBe('2024-03-12T12:00:00');
    spyDate.mockRestore();
  });

  test('should return the correct date string for 30 days ago', () => {
    const mockDateNow = new Date('2024-03-19T12:00:00Z');
    const spyDate = jest.spyOn(global, 'Date').mockImplementation(() => mockDateNow);

    expect(getDateDayAgo(30)).toBe('2024-02-18T12:00:00');
    spyDate.mockRestore();
  });

  test('should return the correct date string for 90 days ago', () => {
    const mockDateNow = new Date('2024-03-19T12:00:00Z');
    const spyDate = jest.spyOn(global, 'Date').mockImplementation(() => mockDateNow);

    expect(getDateDayAgo(90)).toBe('2023-12-20T12:00:00');
    spyDate.mockRestore();
  });
});

describe('getTimeLastUpdate', () => {
  test('should return the correct time in am/pm format', () => {
    expect(getTimeLastUpdate('2024-03-25T15:45:00Z')).toBe('3:45pm');
    expect(getTimeLastUpdate('2024-03-25T08:30:00Z')).toBe('8:30am');
  });

  test('should return the correct time when hours are greater than 12', () => {
    expect(getTimeLastUpdate('2024-03-25T18:20:00Z')).toBe('6:20pm');
  });

  test('should return the correct time when hours are equal to 12', () => {
    expect(getTimeLastUpdate('2024-03-25T12:15:00Z')).toBe('12:15am');
  });

  test('should return the correct time when minutes are single digit', () => {
    expect(getTimeLastUpdate('2024-03-25T09:05:00Z')).toBe('9:05am');
  });
});

describe('formatDate', () => {
  test('should return the correct data format', () => {
    expect(formatDate('2024-03-25T15:45:00Z')).toBe('25 марта 2024');
    expect(formatDate('2023-03-21T15:45:00Z')).toBe('21 марта 2023');
    expect(formatDate('2024-01-22T15:45:00Z')).toBe('22 января 2024');
  });
  test('should return the incorrect data format', () => {
    expect(formatDate('2024-03-44T15:45:00Z')).toBe('Data invalid');
    expect(formatDate('2024-23-12T15:45:00Z')).toBe('Data invalid');
  });
});
