import AbstractView from '../framework/view/abstract-view';
import { TypesSorting } from '../const';
import { getLowerCase } from '../utils/common';

const createListSortTemplate = (currentSortingType) => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input
      id="sort-${getLowerCase(TypesSorting.DAY)}"
      class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
      value="sort-${getLowerCase(TypesSorting.DAY)}"
      ${currentSortingType === TypesSorting.DAY ? 'checked' : ''}>
      <label class="trip-sort__btn"
      for="sort-${getLowerCase(TypesSorting.DAY)}"
      data-type-sorting="${getLowerCase(TypesSorting.DAY)}"
      >${TypesSorting.DAY}</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input
      id="sort-${getLowerCase(TypesSorting.TIME)}"
      class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
      value="sort-${getLowerCase(TypesSorting.TIME)}"
      ${currentSortingType === TypesSorting.TIME ? 'checked' : ''}>
      <label class="trip-sort__btn"
      for="sort-${getLowerCase(TypesSorting.TIME)}"
      data-type-sorting="${getLowerCase(TypesSorting.TIME)}"
      >${TypesSorting.TIME}</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input
      id="sort-${getLowerCase(TypesSorting.PRICE)}"
      class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
      value="sort-${getLowerCase(TypesSorting.PRICE)}"
      ${currentSortingType === TypesSorting.PRICE ? 'checked' : ''}>
      <label class="trip-sort__btn"
      for="sort-${getLowerCase(TypesSorting.PRICE)}"
      data-type-sorting="${TypesSorting.PRICE}"
      >${TypesSorting.PRICE}</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>
`;

export default class SortView extends AbstractView {
  #onSortClick = null;
  #currentSortingType = null;
  #sortingNodes = null;

  constructor({ onSortClick, currentSortingType }) {
    super();
    this.#onSortClick = onSortClick;
    this.#currentSortingType = currentSortingType;
    this.element.addEventListener('click', this.#sortClickHandler);
    this.#sortingNodes = [
      ...this.element.querySelectorAll('.trip-sort__input'),
    ].filter(({ disabled }) => !disabled);
  }

  get template() {
    return createListSortTemplate(this.#currentSortingType);
  }

  #sortClickHandler = (evt) => {
    evt.preventDefault();

    if (!evt.target.closest('.trip-sort__btn')) {
      return;
    }

    const datasetTarget = evt.target.dataset.typeSorting;

    this.#sortingNodes.forEach(
      (item) => (item.checked = item.id === `sort-${datasetTarget}`)
    );
    this.#onSortClick(datasetTarget);
  };
}
