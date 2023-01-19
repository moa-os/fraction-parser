import numberLookupMap from './numberLookupMap';

// get the closest vulgar fraction from a decimal
const getClosestLookupNumber = (number: any) => {
  let closest = 0;
  let difference = 1;

  Object.keys(numberLookupMap).forEach((key) => {
    const decimal = parseFloat(key);
    const newDifference = Math.abs(number - decimal);
    if (newDifference < difference) {
      difference = newDifference;
      closest = decimal;
    }
  });

  return closest;
};

export default getClosestLookupNumber;
