import { loadOffers } from '../mock/mocks';

export default class OffersModel {
  offers = loadOffers();

  getByType = (offerType) => this.offers.find(({ type }) => type === offerType);
}
