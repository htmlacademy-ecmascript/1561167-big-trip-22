import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  MSEC_IN_DAY,
  MSEC_IN_HOUR,
  AVERAGE_EVENT_DURATION_TEMPLATE,
  LONG_EVENT_DURATION_TEMPLATE,
  INVERTED_SHORT_DATE_TEMPLATE,
  SHORT_EVENT_DURATION_TEMPLATE,
  TIME_TEMPLATE,
  DATE_EVENT_TEMPLATE,
} from '../const';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const getDurationEvent = (dateFrom, dateTo) =>
  dayjs(dateTo).diff(dayjs(dateFrom));

const humanizeDateCalendarFormat = (date) =>
  date ? dayjs(date).format(DATE_EVENT_TEMPLATE) : '';

const humanizeDateTimeFormat = (date) =>
  date ? dayjs(date).format(TIME_TEMPLATE) : '';

const humanizeDateShortFormat = (
  date,
  template = INVERTED_SHORT_DATE_TEMPLATE
) => (date ? dayjs(date).format(template) : '');

const humanizeDurationEvent = ({ dateFrom, dateTo }) => {
  const diffTimeshtamp = getDurationEvent(dateFrom, dateTo);

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

const isPlannedEvent = (event) => dayjs().isBefore(event.dateFrom);

const isCurrentEvent = (event) =>
  dayjs().isAfter(event.dateFrom) && dayjs().isBefore(event.dateTo);

const isCompletedEvent = (event) => dayjs().isAfter(event.dateTo);

const compareByDuration = (eventA, eventB) => {
  const durrationEventA = getDurationEvent(eventA.dateFrom, eventA.dateTo);
  const durrationEventB = getDurationEvent(eventB.dateFrom, eventB.dateTo);

  return durrationEventB - durrationEventA;
};

const compareByPrice = (eventA, eventB) => eventB.basePrice - eventA.basePrice;

export {
  humanizeDateCalendarFormat,
  humanizeDurationEvent,
  humanizeDateShortFormat,
  humanizeDateTimeFormat,
  isPlannedEvent,
  isCurrentEvent,
  isCompletedEvent,
  compareByDuration,
  compareByPrice,
};
