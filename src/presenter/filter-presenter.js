import { TypesFilters, UpdateType } from '../const';
import { remove, render, replace } from '../framework/render';
import { filter } from '../utils/filter';
import FilterView from '../view/filter-view';

export default class FilterPresenter {
  #filterContainer = null;

  #filterModel = null;
  #eventsModel = null;

  #filterComponent = null;

  #currentFilterType = TypesFilters.EVERYTHING;

  constructor({ filterContainer, filterModel, eventsModel }) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#eventsModel = eventsModel;

    this.#filterModel.addObserver(this.#onModelEvent);
    // this.#eventsModel.addObserver(this.#onModelEvent);
  }

  get filters() {
    const events = this.#eventsModel.events;

    return Object.values(TypesFilters).map((type) => ({
      type,
      count: filter[type](events).length,
    }));
  }

  init = () => {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#currentFilterType,
      onFilterTypeChange: this.#onFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  };

  #onModelEvent = () => {
    this.init();
  };

  #onFilterTypeChange = (filterType) => {
    if (filterType === this.#filterModel.filter) {
      return;
    }

    this.#currentFilterType = filterType;
    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
