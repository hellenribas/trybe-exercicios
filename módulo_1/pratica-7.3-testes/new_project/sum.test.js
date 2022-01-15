const sum = require('./sum');

const verifyNum = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return sum(num1, num2);
} 


test('sum for and five values', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sum 0 and 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('error required', () => {
  expect(() => {
    verifyNum(4, '5')
  }).toThrow();
})

test('message Error is parameters must be numbers', () => {
  expect(() => {
    verifyNum()
  }).toThrow('parameters must be numbers');
})