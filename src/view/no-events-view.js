import { textByCurrentFilterType } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createNoEventsTemplate = (filterType) => `
  <p class="trip-events__msg">${textByCurrentFilterType[filterType]}</p>
`;

export default class NoEventsView extends AbstractView {
  #currentFilterType = null;

  constructor({ filterType }) {
    super();
    this.#currentFilterType = filterType;
  }

  get template() {
    return createNoEventsTemplate(this.#currentFilterType);
  }
}
