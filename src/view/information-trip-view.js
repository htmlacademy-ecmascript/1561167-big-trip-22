import { DAY_MONTH_TEMPLATE, SHORT_DATE_TEMPLATE } from '../const';
import AbstractView from '../framework/view/abstract-view';
import { humanizeDateShortFormat } from '../utils/events';

const getGlobalCostTrip = ({ events, offers: allOffers }) => {
  const getAmountOffers = ({
    type: eventType,
    eventIdOffers,
    allOffers: offers,
  }) => {
    const offerByType = offers.find(({ type }) => type === eventType);

    if (!offerByType) {
      return 0;
    }

    const eventOffers = offerByType.offers.filter(({ id }) =>
      eventIdOffers.includes(id)
    );

    return eventOffers.reduce((acc, { price }) => acc + price, 0);
  };

  if (!events.length) {
    return 0;
  }

  const total = events.reduce(
    (acc, { basePrice, type, offers: eventIdOffers }) =>
      acc + basePrice + getAmountOffers({ type, eventIdOffers, allOffers }),
    0
  );
  return total;
};

const getInitialFinalDestination = ({ events, destinations }) => {
  const getNameDestination = ({ event, points }) =>
    points.find(({ id }) => id === event.destination)?.name;

  if (!events.length) {
    return '';
  }

  const allTitles = events.map((event) =>
    getNameDestination({ event, points: destinations })
  );
  const uniqueTitles = new Set(allTitles);

  if (uniqueTitles.size > 3) {
    const titles = [...uniqueTitles.values()];
    return `${titles[0]} — ... — ${titles[titles.length - 1]}`;
  }

  return [...uniqueTitles].join(' — ');
};

const createInformationTripTemplate = ({ events, offers, destinations }) => {
  if (!events.length) {
    return '';
  }

  const initialDate = humanizeDateShortFormat(
    events[0].dateFrom,
    DAY_MONTH_TEMPLATE
  );
  const finalDate = humanizeDateShortFormat(
    events[events.length - 1].dateTo,
    SHORT_DATE_TEMPLATE
  );
  const title = getInitialFinalDestination({
    events,
    destinations,
  });
  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${title}</h1>
        <p class="trip-info__dates">
        ${initialDate}
        &nbsp;—&nbsp;
        ${finalDate}
        </p>
      </div>
      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">
        ${getGlobalCostTrip({ events, offers })}</span>
      </p>
    </section>`;
};

export default class InformationTripView extends AbstractView {
  #offers = [];
  #events = [];
  #destinations = [];

  constructor({ events, destinations, offers }) {
    super();
    this.#events = events;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get template() {
    return createInformationTripTemplate({
      events: this.#events,
      offers: this.#offers,
      destinations: this.#destinations,
    });
  }
}
