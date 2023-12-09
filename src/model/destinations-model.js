import { loadDestinations } from '../mock/mocks';

export default class DestinationsModel {
  destinations = loadDestinations();

  getById = (destinationId) =>
    this.destinations.find(({ id }) => id === destinationId);
}
