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

  updateEvent = (updateType, update) => {
    const index = this.#events.findIndex(({ id }) => id === update.id);

    if (index === -1) {
      throw new Error('Unable to update a non-existent task');
    }

    this.#events = [
      ...this.#events.slice(0, index),
      update,
      ...this.#events.slice(index + 1),
    ];
    this._notify(updateType, update);
  };

  addEvent = (updateType, update) => {
    this.#events = [update, ...this.#events];
    this._notify(updateType, update);
  };

  deleteEvent = (updateType, update) => {
    const index = this.#events.findIndex(({ id }) => id === update.id);

    if (index === -1) {
      throw new Error('Unable to delete a non-existent task');
    }

    this.#events = [
      ...this.#events.slice(0, index),
      ...this.#events.slice(index + 1),
    ];
    this._notify(updateType);
  };
}
