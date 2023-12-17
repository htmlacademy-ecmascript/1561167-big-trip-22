import { createElement } from '../render';
import { humanizeDateCalendarFormat } from '../utils';

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
  const createOfferTemplate = ({ title, price, id }) => `
		<div class="event__offer-selector">
			<input class="event__offer-checkbox  visually-hidden"
      id="event-offer-${id.slice(0, 7)}"
      type="checkbox" name="event-offer-${id.slice(0, 7)}"
      ${event.offers.includes(id) ? 'checked' : ''}>
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

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type ? type : 'Flight'}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
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
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
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

export default class EventEditingFormView {
  constructor({ titles, destination, offers, event }) {
    this.titles = titles;
    this.destination = destination;
    this.offers = offers;
    this.event = event;
  }

  getTemplate = () =>
    createEventEditingFormTemplate({
      titles: this.titles,
      destination: this.destination,
      offers: this.offers,
      event: this.event,
    });

  getElement = () => {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => {
    this.element = null;
  };
}
