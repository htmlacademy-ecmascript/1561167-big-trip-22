import dayjs from 'dayjs';

const DATE_TEMPLATE = 'MMM DD';

const normalizeEventDate = (dueDate) =>
  dueDate ? dayjs(dueDate).format(DATE_TEMPLATE) : '';

const convertTwoDigitFormat = (number) => `0${number}`.slice(-2);

const getDuratiomAsString = (dateFrom, dateTo) => {
  const duration = Date.parse(dateTo) - Date.parse(dateFrom);
  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  return [
    !days ? '' : `${convertTwoDigitFormat(days)}D`,
    !hours ? '' : `${convertTwoDigitFormat(hours)}H`,
    !minutes ? '' : `${convertTwoDigitFormat(minutes)}M`,
  ].join(' ');
};

const getHoursFromString = (dateString) => {
  const d = new Date(Date.parse(dateString));

  return convertTwoDigitFormat(d.getHours());
};

const getMinutesFromString = (dateString) => {
  const d = new Date(Date.parse(dateString));

  return convertTwoDigitFormat(d.getMinutes());
};

const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

export {
  getRandomArrayElement,
  normalizeEventDate,
  getDuratiomAsString,
  getHoursFromString,
  getMinutesFromString,
};
