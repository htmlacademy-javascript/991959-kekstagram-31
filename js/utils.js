export const getRandomInteger = (a, b) => {
  const minValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (maxValue - minValue + 1) + minValue;
  return Math.floor(result);
};

export const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];
