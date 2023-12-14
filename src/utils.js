import dayjs from 'dayjs';

const humanizeDate = (dateParameter) => {
  if (!dateParameter) {
    return '';
  }

  const { dueDate, template } = dateParameter;
  return dayjs(dueDate).format(template);
};

const convertTwoDigitFormat = (number) => `0${number}`.slice(-2);

const humanizeDuration = ({ dateFrom, dateTo }) => {
  const duration = Date.parse(dateTo) - Date.parse(dateFrom);
  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  if (days >= 1) {
    return `${convertTwoDigitFormat(days)}D ${convertTwoDigitFormat(
      hours
    )}H ${convertTwoDigitFormat(minutes)}M`;
  }
  if (hours >= 1) {
    return `${convertTwoDigitFormat(hours)}H ${convertTwoDigitFormat(
      minutes
    )}M`;
  }
  return `${convertTwoDigitFormat(minutes)}M`;
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
  humanizeDate,
  humanizeDuration,
  getHoursFromString,
  getMinutesFromString,
};
