import { loadDestinations } from '../mock/mocks';

export default class DestinationsModel {
  #destinations = null;

  constructor() {
    this.#destinations = loadDestinations();
  }

  get all() {
    return this.#destinations;
  }

  get names() {
    return this.#destinations.map(({ name }) => name);
  }

  getById = (destinationId) =>
    this.#destinations.find(({ id }) => id === destinationId);
}
