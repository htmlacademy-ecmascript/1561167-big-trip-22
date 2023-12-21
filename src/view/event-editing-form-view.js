import { PRESET_EVENT_POINT_TYPE, TYPES_EVENTS } from '../const';
import AbstractView from '../framework/view/abstract-view';
import { humanizeDateCalendarFormat } from '../utils';

const createEventTypeList = (type = PRESET_EVENT_POINT_TYPE) => {
  const createEventTypeItem = (item) => `
  <div class="event__type-item">
    <input id="event-type-${item.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.toLowerCase()}"
    ${item === type ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${item.toLowerCase()}" for="event-type-${item.toLowerCase()}-1">${item}</label>
  </div>
  `;

  return `
  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${TYPES_EVENTS.map((item) => createEventTypeItem(item)).join('')}
    </fieldset>
  </div>`;
};

const createPhotosTapeTemplate = (photos) => {
  const createPhotoTemplate = ({ src, description }) =>
    `<img class="event__photo" src="${src}" alt="${description}">`;

  if (!photos.length) {
    return '';
  }

  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${photos.map(createPhotoTemplate).join('')}
      </div>
    </div>
  `;
};

const createDestinationTemplate = (destination) => {
  if (!destination) {
    return '';
  }

  const { description, pictures = [] } = destination;
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">
        Destination
      </h3>
      <p class="event__destination-description">${description}</p>
      ${createPhotosTapeTemplate(pictures)}
    </section>
  `;
};

const createListTitlesTemplate = (titles) => {
  if (!titles) {
    return '';
  }

  return `
    <datalist id="destination-list-1">
      ${titles.map((title) => `<option value="${title}"></option>`).join('')}
    </datalist>
  `;
};

const createListOffersTemplate = ({ offers, event }) => {
  const isChecked = (id) => {
    if (!('offers' in event)) {
      return false;
    }

    return event.offers.includes(id);
  };

  const createOfferTemplate = ({ title, price, id }) => `
		<div class="event__offer-selector">
			<input class="event__offer-checkbox  visually-hidden"
      id="event-offer-${id.slice(0, 7)}"
      type="checkbox" name="event-offer-${id.slice(0, 7)}"
      ${isChecked(id) ? 'checked' : ''}>
			<label class="event__offer-label" for="event-offer-${id.slice(0, 7)}">
				<span class="event__offer-title">${title}</span>
				&plus;&euro;&nbsp;
				<span class="event__offer-price">${price}</span>
			</label>
		</div>
  `;

  if (!offers || !offers.length) {
    return '';
  }

  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
				${offers.map((offer) => createOfferTemplate(offer)).join('')}
      </div>
    </section>
  `;
};

const getTotalCostOffers = ({ offers, event }) => {
  if (!('offers' in event)) {
    return 0;
  }

  const result = offers.reduce((acc, { id, price }) => {
    const isSelected = event.offers.includes(id);
    return acc + (isSelected ? price : 0);
  }, 0);

  return event.basePrice + result;
};

const createEventEditingFormTemplate = ({
  titles,
  destination,
  offers,
  event,
}) => {
  const { dateFrom, dateTo, type } = event ?? {};
  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          ${createEventTypeList(type)}
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type ? type : PRESET_EVENT_POINT_TYPE}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
          value="${destination ? destination.name : ''}"
          list="destination-list-1">
          ${createListTitlesTemplate(titles)}
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
          value="${humanizeDateCalendarFormat(dateFrom)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
          value="${humanizeDateCalendarFormat(dateTo)}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price"
          value="${getTotalCostOffers({ offers, event })}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
      ${createListOffersTemplate({ offers, event })}
      ${createDestinationTemplate(destination)}
      </section>
    </form>
  </li>
`;
};

export default class EventEditingFormView extends AbstractView {
  #titles = null;
  #destination = null;
  #offers = null;
  #event = null;

  constructor({ titles, destination, offers, event }) {
    super();
    this.#titles = titles;
    this.#destination = destination;
    this.#offers = offers;
    this.#event = event;
  }

  get template() {
    return createEventEditingFormTemplate({
      titles: this.#titles,
      destination: this.#destination,
      offers: this.#offers,
      event: this.#event,
    });
  }
}
