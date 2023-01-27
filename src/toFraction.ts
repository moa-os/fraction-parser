import { ToFractionOptions } from './types';
import numberLookupMap from './helpers/numberLookupMap';
import getClosestLookupNumber from './helpers/getClosestLookupNumber';

// functions that returns a string representation of a fraction from a number
const toFraction = (decimal: number, { useUnicodeVulgar = true }: ToFractionOptions) => {
  // if the number is a whole number, return it as a string
  if (decimal % 1 === 0) {
    return decimal.toString();
  }

  const decimalPortion = (decimal - Math.floor(decimal)).toFixed(2);

  let numberPortion: number | string = Math.trunc(decimal);

  numberPortion = numberPortion === 0 ? '' : `${numberPortion} `;

  // if the number is a decimal, return it as a fraction
  if (useUnicodeVulgar) {
    return `${numberPortion}${numberLookupMap[getClosestLookupNumber(decimalPortion)].vulgar}`;
  }

  return `${numberPortion}${numberLookupMap[getClosestLookupNumber(decimalPortion)].fraction}`;
};

export default toFraction;
