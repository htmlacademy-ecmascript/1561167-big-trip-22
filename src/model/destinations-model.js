import { loadDestinations } from '../mock/mocks';

export default class DescriptionsModel {
  destinations = loadDestinations();

  getById = (destinationId) =>
    this.destinations.find(({ id }) => id === destinationId);
}
