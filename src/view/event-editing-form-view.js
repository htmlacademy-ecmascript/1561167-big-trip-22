import { PRESET_EVENT_POINT_TYPE, TYPES_EVENTS } from '../const';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import { getCapitalLetter, getLowerCase } from '../utils/common';
import {
  getDestinationById,
  getNameDeatination,
  humanizeDateCalendarFormat,
} from '../utils/events';
import flatpicker from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const createEventTypeList = (type) => {
  const createEventTypeItem = (item) => `
  <div class="event__type-item">
    <input
    id="event-type-${item}-1"
    class="event__type-input  visually-hidden" type="radio" name="event-type"
    value="${item}"
    ${item === type ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${item}"
    for="event-type-${item}-1">${getCapitalLetter(item)}</label>
  </div>
  `;

  const generateEventTypeItem = () =>
    TYPES_EVENTS.map((item) => createEventTypeItem(getLowerCase(item))).join(
      ''
    );

  return `
  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${generateEventTypeItem()}
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
      data-id-offer="${id}"
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

const createFieldEventTypeTemplate = (type) => `
	<div class="event__type-wrapper">
		<label class="event__type  event__type-btn" for="event-type-toggle-1">
			<span class="visually-hidden">Choose event type</span>
			<img class="event__type-icon" width="17" height="17"
      src="img/icons/${getLowerCase(type)}.png"
      alt="Event type icon">
		</label>
		<input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
		${createEventTypeList(getLowerCase(type))}
	</div>
`;

const createFieldEventDestinationTemplate = ({ type, name, titles }) => `
	<div class="event__field-group  event__field-group--destination">
		<label class="event__label  event__type-output" for="event-destination-1">
			${type ? type : PRESET_EVENT_POINT_TYPE}
		</label>
		<input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
		value="${name}"
		list="destination-list-1">
		${createListTitlesTemplate(titles)}
	</div>
`;

const createFieldEventDateTemplate = ({ dateFrom, dateTo }) => `
	<div class="event__field-group  event__field-group--time">
		<label class="visually-hidden" for="event-start-time-1">From</label>
		<input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
		value="${humanizeDateCalendarFormat(dateFrom)}">
		&mdash;
		<label class="visually-hidden" for="event-end-time-1">To</label>
		<input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
		value="${humanizeDateCalendarFormat(dateTo)}">
	</div>
`;

const createFieldEventPriceTemplate = ({ basePrice }) => `
	<div class="event__field-group  event__field-group--price">
		<label class="event__label" for="event-price-1">
			<span class="visually-hidden">Price</span>
			&euro;
		</label>
		<input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price"
		value="${basePrice}">
	</div>
`;

const createEventEditingFormTemplate = ({
  titles,
  destinations,
  offers,
  state: event,
}) => {
  const {
    destination: id,
    dateFrom,
    dateTo,
    type = PRESET_EVENT_POINT_TYPE,
  } = event;
  const eventOffers =
    offers.find((item) => getLowerCase(item.type) === type)?.offers ?? [];
  const destination = getDestinationById({ id, destinations });
  const name = getNameDeatination({ id, destinations });
  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
				${createFieldEventTypeTemplate(type)}
				${createFieldEventDestinationTemplate({ type, name, titles })}
				${createFieldEventDateTemplate({ dateFrom, dateTo })}
				${createFieldEventPriceTemplate(event)}
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        ${createListOffersTemplate({ offers: eventOffers, event })}
        ${createDestinationTemplate(destination)}
      </section>
    </form>
  </li>
`;
};

export default class EventEditingFormView extends AbstractStatefulView {
  #titles = null;
  #destinations = null;
  #offers = null;
  #onEditingModeToggleClick = null;
  #onEditingFormSubmit = null;
  #dateFromPicker = null;
  #dateToPicker = null;

  constructor(formPparameters) {
    const {
      destinations,
      offers,
      event,
      onEditingModeToggleClick,
      onEditingFormSubmit,
    } = formPparameters;

    super();
    this.#destinations = destinations;
    this.#offers = offers;
    this.#onEditingModeToggleClick = onEditingModeToggleClick;
    this.#onEditingFormSubmit = onEditingFormSubmit;

    this._setState(EventEditingFormView.parseEventToState(event));
    this._restoreHandlers();
  }

  get template() {
    this.#titles = this.#destinations.map(({ name }) => name);
    return createEventEditingFormTemplate({
      titles: this.#titles,
      destinations: this.#destinations,
      offers: this.#offers,
      state: this._state,
    });
  }

  reset = (event) =>
    this.updateElement(EventEditingFormView.parseEventToState(event));

  removeElement = () => {
    super.removeElement();
    if (this.#dateFromPicker) {
      this.#dateFromPicker.destroy();
      this.#dateFromPicker = null;
    }
    if (this.#dateToPicker) {
      this.#dateToPicker.destroy();
      this.#dateToPicker = null;
    }
  };

  _restoreHandlers = () => {
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditingFormClickHandler);
    this.element
      .querySelector('form')
      .addEventListener('submit', this.#editingFormSubmitHandler);
    this.element
      .querySelector('.event__type-list')
      .addEventListener('change', this.#typeEventChangeHandler);
    this.element
      .querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationEventChangeHandler);
    this.element
      .querySelector('.event__available-offers')
      .addEventListener('change', this.#offersChangeHandler);
    this.element
      .querySelector('.event__input--price')
      .addEventListener('input', this.#priceInputHandler);

    this.#initDatePicker();
  };

  #initDatePicker = () => {
    const KEY = 'time_24hr';
    const commonOptions = {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      locale: { firstDayOfWeek: 1 },
      [KEY]: true,
    };

    this.#dateFromPicker = flatpicker(
      this.element.querySelector('input[name="event-start-time"]'),
      {
        ...commonOptions,
        defaultDate: this._state.dateFrom,
        onClose: this.#dateFromCloseHandler,
        maxDate: this._state.dateTo,
      }
    );
    this.#dateToPicker = flatpicker(
      this.element.querySelector('input[name="event-end-time"]'),
      {
        ...commonOptions,
        defaultDate: this._state.dateTo,
        onClose: this.#dateToCloseHandler,
        minDate: this._state.dateFrom,
      }
    );
  };

  #dateFromCloseHandler = ([userDate]) => {
    this._setState({ dateFrom: userDate });
    this.#dateToPicker.set('minDate', this._state.dateFrom);
  };

  #dateToCloseHandler = ([userDate]) => {
    this._setState({ dateTo: userDate });
    this.#dateFromPicker.set('maxDate', this._state.dateTo);
  };

  #priceInputHandler = (evt) => {
    evt.preventDefault();
    this._setState({ basePrice: evt.target.value });
  };

  #destinationEventChangeHandler = (evt) => {
    evt.preventDefault();

    const destination = this.#destinations.find(
      ({ name }) => name === evt.target.value
    );
    const idDestination = destination ? destination.id : null;
    this.updateElement({
      destination: idDestination,
    });
  };

  #typeEventChangeHandler = (evt) => {
    if (!evt.target.closest('.event__type-item')) {
      return;
    }

    this.updateElement({ type: evt.target.value, offers: [] });
  };

  #offersChangeHandler = () => {
    const chekedOffers = [
      ...this.element.querySelectorAll('.event__offer-checkbox:checked'),
    ];
    const idCheckedOffers = chekedOffers.map((offer) => offer.dataset.idOffer);
    this._setState({ offers: idCheckedOffers });
  };

  #closeEditingFormClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditingModeToggleClick();
  };

  #editingFormSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#onEditingFormSubmit(
      EventEditingFormView.parseStateToEvent(this._state)
    );
  };

  static parseEventToState = (event) => ({
    ...event,
    type: getLowerCase(event.type),
  });

  static parseStateToEvent = (state) => ({
    ...state,
    type: getCapitalLetter(state.type),
  });
}
