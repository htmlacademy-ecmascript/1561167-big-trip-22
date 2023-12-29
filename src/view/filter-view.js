import AbstractView from '../framework/view/abstract-view';

const createFilterItemTemplate = ({ type, isDisabled, isChecked }) => `
  <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}"
    ${isChecked ? ' checked' : ''}
    ${isDisabled ? ' disabled' : ''}>
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>
`;

const createFiltersTemplate = (filters) => `
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => createFilterItemTemplate(filter)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export default class FilterView extends AbstractView {
  #filters = null;

  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
