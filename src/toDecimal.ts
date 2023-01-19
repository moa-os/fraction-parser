import numberLookupMap from './helpers/numberLookupMap';

// function that takes a unicode vulgar or a fraction and returns a decimal
const toDecimal = (value: string) => {
  const [int, fraction] = value.split(' ');
  const decimal =
    Object.keys(numberLookupMap).find(
      (key) => numberLookupMap[key].vulgar === fraction || numberLookupMap[key].fraction === fraction,
    ) || fraction;

  return parseFloat(int) + parseFloat(decimal);
};

export default toDecimal;
