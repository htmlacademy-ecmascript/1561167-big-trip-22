import AbstractView from '../framework/view/abstract-view';
import { PRESET_EVENT_POINT_TYPE } from '../const';
import {
  humanizeDurationEvent,
  humanizeDateShortFormat,
  humanizeDateTimeFormat,
  getNameDeatination,
} from '../utils/events';

const getTotalCostOffers = (offers) => {
  if (!offers.length) {
    return 0;
  }

  return offers.reduce((acc, item) => acc + item.price, 0);
};

const createListOffersTemplate = (offers) => {
  if (!offers.length) {
    return '';
  }

  const items = offers
    .map(
      ({ title, price }) => `
          <li class="event__offer">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </li>`
    )
    .join('');

  return `
    <ul class="event__selected-offers">
      ${items}
    </ul>
  `;
};

const createEventTemplate = ({ event, destinations, offers }) => {
  const {
    destination,
    dateFrom,
    dateTo,
    type = PRESET_EVENT_POINT_TYPE,
    basePrice,
    isFavorite,
  } = event;

  const name = getNameDeatination({ id: destination, destinations });
  const eventOffers = offers.find((item) => item.type === type)?.offers ?? [];
  const selectedOffers = eventOffers.filter(({ id }) =>
    event.offers.includes(id)
  );
  return `
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">
      ${humanizeDateShortFormat(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42"
        src="img/icons/${type.toLowerCase()}.png"
        alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">
          ${humanizeDateTimeFormat(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">
          ${humanizeDateTimeFormat(dateTo)}</time>
        </p>
        <p class="event__duration">
          ${humanizeDurationEvent({ dateFrom, dateTo })}
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">
        ${basePrice + getTotalCostOffers(selectedOffers)}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createListOffersTemplate(selectedOffers)}
      <button class="event__favorite-btn
      ${isFavorite ? ' event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
`;
};

export default class EventView extends AbstractView {
  #event = null;
  #destinations = [];
  #offers = [];
  #onEventModeToggleClick = null;
  #onFavoriteClick = null;

  constructor({
    event,
    destinations,
    offers,
    onEventModeToggleClick,
    onFavoriteClick,
  }) {
    super();
    this.#event = event;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#onEventModeToggleClick = onEventModeToggleClick;
    this.#onFavoriteClick = onFavoriteClick;

    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#eventModeToggleClickHandler);
    this.element
      .querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoritClickHandler);
  }

  get template() {
    return createEventTemplate({
      event: this.#event,
      destinations: this.#destinations,
      offers: this.#offers,
    });
  }

  #eventModeToggleClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEventModeToggleClick();
  };

  #favoritClickHandler = (evt) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };
}
