const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const updateItem = (items, newItem) =>
  items.map((item) => (item.id === newItem.id ? newItem : item));

export { getRandomArrayElement, isEscapeKey, updateItem };
