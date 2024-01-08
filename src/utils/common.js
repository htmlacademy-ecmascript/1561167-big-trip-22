const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const updateItem = (items, newItem) =>
  items.map((item) => (item.id === newItem.id ? newItem : item));

const getLowerCase = (string) => string.toLowerCase();

export { getRandomArrayElement, isEscapeKey, updateItem, getLowerCase };
