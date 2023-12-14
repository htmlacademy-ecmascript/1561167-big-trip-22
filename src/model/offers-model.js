import { loadOffers } from '../mock/mocks';

export default class OffersModel {
  constructor() {
    this.offers = loadOffers();
  }

  getByType = (TYPES_EVENTS) =>
    TYPES_EVENTS
      ? this.offers.find(({ type }) => type === TYPES_EVENTS).offers
      : [];

  getSelectedOnes = ({ TYPES_EVENTS, eventOffers }) => {
    const offersObject = this.getByType(TYPES_EVENTS);

    if (!offersObject) {
      return [];
    }

    return offersObject.filter(({ id }) => eventOffers.includes(id));
  };
}
