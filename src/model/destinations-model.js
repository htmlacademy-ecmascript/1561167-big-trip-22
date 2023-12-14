import { loadDestinations } from '../mock/mocks';

export default class DestinationsModel {
  constructor() {
    this.destinations = loadDestinations();
  }

  getList = () => this.destinations;

  getNames = () => this.destinations.map(({ name }) => name);

  getById = (destinationId) =>
    this.destinations.find(({ id }) => id === destinationId);
}
