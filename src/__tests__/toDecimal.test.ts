import { toDecimal } from '../index';

test('returns the decimal of a number as a unicode vulgar', () => {
  expect(toDecimal('0 ½')).toBe(0.5);
});

test('returns the decimal of a number as a fraction', () => {
  expect(toDecimal('0 1/2')).toBe(0.5);
});
