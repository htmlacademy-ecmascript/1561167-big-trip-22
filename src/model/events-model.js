import { TEST_EVENTS_COUNT, TEST_EVENT_ID } from '../const';
import { loadRandomEvent } from '../mock/mocks';

export default class EventsModel {
  #events = null;

  constructor() {
    do {
      this.#events = Array.from({ length: TEST_EVENTS_COUNT }, loadRandomEvent);
    } while (!this.#events.find(({ id }) => id === TEST_EVENT_ID));
  }

  get all() {
    return this.#events;
  }

  getById = (eventId) => this.#events.find(({ id }) => id === eventId);
}
