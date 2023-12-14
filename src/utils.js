import dayjs from 'dayjs';

const normalizeDate = (dateParameter) => {
  if (!dateParameter) {
    return '';
  }

  const { dueDate, template } = dateParameter;
  return dayjs(dueDate).format(template);
};

const convertTwoDigitFormat = (number) => `0${number}`.slice(-2);

const getDuratiomAsString = (dateFrom, dateTo) => {
  const duration = Date.parse(dateTo) - Date.parse(dateFrom);
  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  return [
    !days ? '' : `${convertTwoDigitFormat(days)}D`,
    !hours ? '00H' : `${convertTwoDigitFormat(hours)}H`,
    !minutes ? '00M' : `${convertTwoDigitFormat(minutes)}M`,
  ].join(' ');
};

const getHoursFromString = (dateString) => dayjs(dateString).format('hh');

const getMinutesFromString = (dateString) => dayjs(dateString).format('mm');

const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

export {
  getRandomArrayElement,
  normalizeDate,
  getDuratiomAsString,
  getHoursFromString,
  getMinutesFromString,
};
