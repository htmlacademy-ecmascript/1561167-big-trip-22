import Observable from '../framework/observable';

export default class EventsModel extends Observable {
  #events = null;

  constructor(events) {
    super();
    this.#events = events;
  }

  get events() {
    return this.#events;
  }
}
