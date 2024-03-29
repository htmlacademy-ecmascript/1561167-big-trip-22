const TYPES_EVENTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];
const PRESET_EVENT_POINT_TYPE = TYPES_EVENTS[5];

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const DAY_MONTH_TEMPLATE = 'DD';
const SHORT_DATE_TEMPLATE = 'DD MMM';
const INVERTED_SHORT_DATE_TEMPLATE = 'MMM DD';
const TIME_TEMPLATE = 'HH:mm';
const LONG_EVENT_DURATION_TEMPLATE = 'DD[D] HH[H] mm[M]';
const AVERAGE_EVENT_DURATION_TEMPLATE = 'HH[H] mm[M]';
const SHORT_EVENT_DURATION_TEMPLATE = 'mm[M]';
const DATE_EVENT_TEMPLATE = 'DD/MM/YY hh:mm';

const TypesFilters = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past',
};

const TypesSorting = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const PRESET_SORTING_TYPE = TypesSorting.DAY;

const TEST_EVENT_ID = '22';
const TEST_EVENTS_COUNT = 5;

export {
  TYPES_EVENTS,
  TEST_EVENT_ID,
  TEST_EVENTS_COUNT,
  PRESET_EVENT_POINT_TYPE,
  DAY_MONTH_TEMPLATE,
  SHORT_DATE_TEMPLATE,
  INVERTED_SHORT_DATE_TEMPLATE,
  DATE_EVENT_TEMPLATE,
  TIME_TEMPLATE,
  LONG_EVENT_DURATION_TEMPLATE,
  AVERAGE_EVENT_DURATION_TEMPLATE,
  SHORT_EVENT_DURATION_TEMPLATE,
  MSEC_IN_DAY,
  MSEC_IN_HOUR,
  TypesFilters,
  TypesSorting,
  PRESET_SORTING_TYPE,
};
