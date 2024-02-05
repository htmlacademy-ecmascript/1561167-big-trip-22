const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const getLowerCase = (string) => string.toLowerCase();

const getCapitalLetter = (string) => string[0].toUpperCase() + string.slice(1);

const getUpperCase = (string) => string.toUpperCase();

export {
  getRandomArrayElement,
  isEscapeKey,
  getLowerCase,
  getCapitalLetter,
  getUpperCase,
};
