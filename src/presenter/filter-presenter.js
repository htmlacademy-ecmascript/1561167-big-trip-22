import { TypesFilters } from '../const';
import { filter } from '../utils/filter';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #eventsModel = null;

  #filterComponent = null;

  constructor({ filterContainer, filterModel, eventsModel }) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#eventsModel = eventsModel;

    this.#filterModel.addObserver(this.#onModelEvent);
    this.#eventsModel.addObserver(this.#onModelEvent);
  }

  get filters() {
    const events = this.#eventsModel.events;

    return Object.values(TypesFilters).map((type) => ({
      type,
      count: filter[type](events).length,
    }));
  }

  init = () => {};

  #onModelEvent = () => {};
}
