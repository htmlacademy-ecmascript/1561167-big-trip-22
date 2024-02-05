import AbstractView from '../framework/view/abstract-view';

const createFilterItemTemplate = ({
  filter: { type, count },
  currentFilterType,
}) => `
  <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}"
    ${type === currentFilterType ? ' checked' : ''}
    ${count ? '' : ' disabled'}>
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>
`;

const createFiltersTemplate = ({ filters, currentFilterType }) => {
  const filterElements = filters
    .map((filter) => createFilterItemTemplate({ filter, currentFilterType }))
    .join('');
  return `
    <form class="trip-filters" action="#" method="get">
      ${filterElements}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};

export default class FilterView extends AbstractView {
  #filters = null;
  #currentFilterType = null;
  #onFilterTypeChange = null;

  constructor({ filters, currentFilterType, onFilterTypeChange }) {
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
    this.#onFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate({
      filters: this.#filters,
      currentFilterType: this.#currentFilterType,
    });
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#onFilterTypeChange(evt.target.value);
  };
}
