import { toFractionOptions } from './types';
import numberLookupMap from './helpers/numberLookupMap';
import getClosestLookupNumber from './helpers/getClosestLookupNumber';

// functions that returns a string representation of a fraction from a number
const toFraction = (number: number, { useUnicodeVulgar = true }: toFractionOptions) => {
  // if the number is a whole number, return it as a string
  if (number % 1 === 0) {
    return number.toString();
  }

  const decimal = (number - Math.floor(number)).toFixed(2);

  const int = Math.trunc(number);

  // if the number is a decimal, return it as a fraction
  if (useUnicodeVulgar) {
    return `${int} ${numberLookupMap[getClosestLookupNumber(decimal)].vulgar}`;
  }

  return `${int} ${numberLookupMap[getClosestLookupNumber(decimal)].fraction}`;
};

export default toFraction;
