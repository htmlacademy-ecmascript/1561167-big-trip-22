import { PRESET_EVENT_POINT_TYPE } from '../const';

export default class OffersModel {
  #offers = null;

  constructor(offers) {
    this.#offers = offers;
  }

  get all() {
    return this.#offers;
  }

  getByType = (eventType = PRESET_EVENT_POINT_TYPE) =>
    this.#offers.find(({ type }) => type === eventType).offers;

  getSelectedOnes = ({ eventType, eventOffers }) => {
    const offers = this.getByType(eventType);

    return offers.filter(({ id }) => eventOffers.includes(id));
  };
}
