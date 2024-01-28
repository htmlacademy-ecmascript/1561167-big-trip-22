import { TypesFilters } from '../const';
import Observable from '../framework/observable';

export default class FilterModel extends Observable {
  #filter = TypesFilters.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  setFilter = (updateType, filter) => {
    this.#filter = this.filter;
    this._notify(updateType, filter);
  };
}
