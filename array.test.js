const { average, getFirstElement, sumArray } = require('./arrayFunctions');

describe('Average', () => {
  test('should calculate the average of an array of numbers', () => {
    const numbers = [2, 4, 6, 8];
    expect(average(numbers)).toBe(5);
  });

  test('should return 0 for an empty array', () => {
    const numbers = [];
    expect(average(numbers)).toBe(0);
  });

  test('should return the same number for an array with only one element', () => {
    const numbers = [5];
    expect(average(numbers)).toBe(5);
  });
});

describe('getFirstElement', () => {
  test('should return the first element of an array', () => {
    const numbers = [1, 2, 3];
    expect(getFirstElement(numbers)).toBe(1);
  });

  test('should return undefined for an empty array', () => {
    const numbers = [];
    expect(getFirstElement(numbers)).toBeUndefined();
  });
});

describe('sumArray', () => {
  test('should return the sum of an array of numbers', () => {
    const numbers = [1, 2, 3];
    expect(sumArray(numbers)).toBe(6);
  });

  test('should return 0 for an empty array', () => {
    const numbers = [];
    expect(sumArray(numbers)).toBe(0);
  });
});