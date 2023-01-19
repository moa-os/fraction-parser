import toFraction from '../toFraction';

//  a test that returns the fraction of a number as a unicode vulgar or a fraction

test('returns the fraction of a number as a unicode vulgar', () => {
  expect(toFraction(0.5, { useUnicodeVulgar: true })).toBe('0 ½');
});

test('returns the fraction of a number as a fraction', () => {
  expect(toFraction(0.5, { useUnicodeVulgar: false })).toBe('0 1/2');
});
