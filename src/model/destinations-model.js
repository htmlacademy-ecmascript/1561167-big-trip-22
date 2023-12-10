import { loadDestinations } from '../mock/mocks';

export default class DestinationsModel {
  constructor() {
    this.destinations = loadDestinations();
  }

  getById = (destinationId) =>
    this.destinations.find(({ id }) => id === destinationId);
}
