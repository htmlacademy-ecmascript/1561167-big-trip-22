import { PRESET_EVENT_POINT_TYPE } from '../const';
import { loadOffers } from '../mock/mocks';

export default class OffersModel {
  constructor() {
    this.offers = loadOffers();
  }

  getByType = (eventType = PRESET_EVENT_POINT_TYPE) =>
    this.offers.find(({ type }) => type === eventType).offers;

  getSelectedOnes = ({ eventType, eventOffers }) => {
    const offers = this.getByType(eventType);

    return offers.filter(({ id }) => eventOffers.includes(id));
  };
}
