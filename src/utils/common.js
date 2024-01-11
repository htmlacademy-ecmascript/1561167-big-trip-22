const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const updateItem = (items, newItem) =>
  items.map((item) => (item.id === newItem.id ? newItem : item));

const getLowerCase = (string) => string.toLowerCase();

const getCapitalLetter = (string) => string[0] + string.slice(1);

const getUpperCase = (string) => string.toUpperCase();

export {
  getRandomArrayElement,
  isEscapeKey,
  updateItem,
  getLowerCase,
  getCapitalLetter,
  getUpperCase,
};
