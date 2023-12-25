export default class DestinationsModel {
  #destinations = null;

  constructor(destinations) {
    this.#destinations = destinations;
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
