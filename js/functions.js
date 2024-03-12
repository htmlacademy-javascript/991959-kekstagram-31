const checkMaxStringLength = (string, maxLength) => string.length <= maxLength;

checkMaxStringLength('проверяемая строка', 20);

const isPolindrome = (string) => {
  const newString = string.replace(/ /g, '').toLowerCase();

  let reversedString = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    reversedString += newString[i];
  }
  return newString === reversedString;
};

isPolindrome('Лёша на полке клопа нашёл ');


// const isPolindrome = (string) => {
//   const normalizedString = string.replace(/\s+/g, '').toLowerCase();

//   return normalizedString === [...normalizedString].reverse().join('');
// };

const extractNumbers = (string) => Number(
  [...string].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN
);
// const extractNumbers = (string = '') => Math.abs(parseInt(string.replace(/\D+/g, ''), 10));

extractNumbers('vgb2023!1fg');
