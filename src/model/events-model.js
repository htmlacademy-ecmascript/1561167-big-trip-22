import { loadRandomEvent } from '../mock/mocks';

const EVENTS_COUNT = 5;

export default class EventsModel {
  constructor() {
    this.events = Array.from({ length: EVENTS_COUNT }, loadRandomEvent);
  }

  getAll = () => this.events;

  getById = (eventId) => {
    if (!eventId) {
      return undefined;
    }

    return this.events.find(({ id }) => id === eventId);
  };
}
