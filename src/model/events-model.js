export default class EventsModel {
  #events = null;

  constructor(events) {
    this.#events = events;
    // do {
    //   this.#events = Array.from({ length: TEST_EVENTS_COUNT }, loadRandomEvent);
    // } while (!this.#events.find(({ id }) => id === TEST_EVENT_ID));
  }

  get all() {
    return this.#events;
  }

  get isEmpty() {
    return this.#events.length === 0;
  }

  getById = (eventId) => this.#events.find(({ id }) => id === eventId);
}
