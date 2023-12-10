import { loadOffers } from '../mock/mocks';

export default class OffersModel {
  constructor() {
    this.offers = loadOffers();
  }

  getByType = (eventType, eventOffers) => {
    const offerObject = this.offers.find(({ type }) => type === eventType);

    if (!offerObject) {
      return [];
    }

    return offerObject.offers.filter(({ id }) => eventOffers.includes(id));
  };
}
