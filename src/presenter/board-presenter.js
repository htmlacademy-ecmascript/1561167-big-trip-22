import { RenderPosition, render } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import ListFilterView from '../view/list-filter-view';
import ListSortView from '../view/list-sort-view';
import EventView from '../view/event-view';
import EventEditingFormView from '../view/event-editing-form-view';
import { TEST_EVENT_ID } from '../const';
import InformationTripView from '../view/information-trip-view';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);

export default class BoardPresenter {
  #boardContainer = null;
  #eventsModel = null;
  #destinationModel = null;
  #offersModel = null;
  #filterContainerNode = null;
  #tripHeaderNode = null;

  #eventsContainerComponent = new EventsContainerView();
  #boardEvents = [];

  constructor(board) {
    const { boardContainer, eventsModel, destinationsModel, offerrsModel } =
      board;
    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offerrsModel;
  }

  init() {
    this.#tripHeaderNode = tripHeaderNode;
    this.#filterContainerNode = filterContainerNode;

    this.#boardEvents = this.#eventsModel.all;

    render(
      new InformationTripView({
        events: this.#boardEvents,
        offers: this.#offersModel.all,
        destinations: this.#destinationModel.all,
      }),
      this.#tripHeaderNode,
      RenderPosition.AFTERBEGIN
    );
    render(new ListFilterView(), this.#filterContainerNode);
    render(new ListSortView(), this.#boardContainer);

    render(this.#eventsContainerComponent, this.#boardContainer);

    const newEvent = {};
    render(
      new EventEditingFormView({
        titles: this.#destinationModel.names,
        event: newEvent,
        offers: this.#offersModel.getByType(newEvent?.type),
        destination: this.#destinationModel.getById(newEvent?.destination),
      }),
      this.#eventsContainerComponent.element
    );

    this.#boardEvents.forEach((itemEvent) => this.#renderEvent(itemEvent));

    const event = this.#eventsModel.getById(TEST_EVENT_ID);
    const eventDestination = this.#destinationModel.getById(event?.destination);
    render(
      new EventEditingFormView({
        titles: this.#destinationModel.names,
        event,
        offers: this.#offersModel.getByType(event?.type),
        destination: eventDestination,
      }),
      this.#eventsContainerComponent.element
    );
  }

  #renderEvent = (event) => {
    const destination = this.#destinationModel.getById(event.destination);
    const offers = this.#offersModel.getSelectedOnes({
      eventType: event.type,
      eventOffers: event.offers,
    });

    render(
      new EventView({ event, destination, offers }),
      this.#eventsContainerComponent.element
    );
  };
}
