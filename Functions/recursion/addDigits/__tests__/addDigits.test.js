import addDigits from '../addDigits.js';

test('addDigits', () => {
  expect(addDigits(0)).toBe(0);
  expect(addDigits(5)).toBe(5);
  expect(addDigits(10)).toBe(1);
  expect(addDigits(19)).toBe(1);
  expect(addDigits(38)).toBe(2);
  expect(addDigits(1259)).toBe(8);
  expect(addDigits(598997686567)).toBe(4);
  expect(addDigits(999999999999)).toBe(9);
});