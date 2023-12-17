import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  MSEC_IN_DAY,
  MSEC_IN_HOUR,
  AVERAGE_EVENT_DURATION_TEMPLATE,
  LONG_EVENT_DURATION_TEMPLATE,
  SHORT_DATE_TEMPLATE,
  SHORT_EVENT_DURATION_TEMPLATE,
  TIME_TEMPLATE,
  DATE_EVENT_TEMPLATE,
} from './const';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const humanizeDateCalendarFormat = (date) =>
  date ? dayjs(date).format(DATE_EVENT_TEMPLATE) : '';

const humanizeDateTimeFormat = (date) =>
  date ? dayjs(date).format(TIME_TEMPLATE) : '';

const humanizeDateShortFormat = (date) =>
  date ? dayjs(date).format(SHORT_DATE_TEMPLATE) : '';

const humanizeDurationEvent = ({ dateFrom, dateTo }) => {
  const diffTimeshtamp = dayjs(dateTo).diff(dayjs(dateFrom));

  if (diffTimeshtamp >= MSEC_IN_DAY) {
    return dayjs.duration(diffTimeshtamp).format(LONG_EVENT_DURATION_TEMPLATE);
  }
  if (diffTimeshtamp >= MSEC_IN_HOUR) {
    return dayjs
      .duration(diffTimeshtamp)
      .format(AVERAGE_EVENT_DURATION_TEMPLATE);
  }
  return dayjs.duration(diffTimeshtamp).format(SHORT_EVENT_DURATION_TEMPLATE);
};

const getRandomArrayElement = (items) =>
  items[Math.floor(Math.random() * items.length)];

export {
  getRandomArrayElement,
  humanizeDateCalendarFormat,
  humanizeDurationEvent,
  humanizeDateShortFormat,
  humanizeDateTimeFormat,
};
