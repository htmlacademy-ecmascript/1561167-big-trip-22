import { loadOffers } from '../mock/mocks';

export default class OffersModel {
  constructor() {
    this.offers = loadOffers();
  }

  getByType = (eventType) =>
    eventType ? this.offers.find(({ type }) => type === eventType).offers : [];

  getSelectedOnes = ({ eventType, eventOffers }) => {
    const offersObject = this.getByType(eventType);

    if (!offersObject) {
      return [];
    }

    return offersObject.filter(({ id }) => eventOffers.includes(id));
  };
}
