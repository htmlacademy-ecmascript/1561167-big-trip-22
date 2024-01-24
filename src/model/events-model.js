export default class EventsModel {
  #events = null;

  constructor(events) {
    this.#events = events;
  }

  get all() {
    return this.#events;
  }
}
