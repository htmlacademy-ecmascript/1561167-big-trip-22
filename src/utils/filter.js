import { TypesFilters } from '../const';
import { isCurrentEvent, isPlannedEvent, isCompletedEvent } from './events';

const filter = {
  [TypesFilters.EVERYTHING]: (events) => [...events],

  [TypesFilters.FUTURE]: (events) =>
    events.filter((event) => isPlannedEvent(event)),

  [TypesFilters.PRESENT]: (events) =>
    events.filter((event) => isCurrentEvent(event)),

  [TypesFilters.PAST]: (events) =>
    events.filter((event) => isCompletedEvent(event)),
};

export { filter };
