import { render } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventPresenter from './event-presenter';
import { updateItem } from '../utils/common';

export default class BoardPresenter {
  #boardContainer = null;
  #eventsModel = null;
  #destinationModel = null;
  #offersModel = null;

  #boardEvents = [];
  #eventsContainerComponent = new EventsContainerView();
  #sortComponent = new SortView();
  #noEventsComponent = new NoEventsView();
  #eventPresenters = new Map();

  constructor(board) {
    const { boardContainer, eventsModel, destinationsModel, offerrsModel } =
      board;

    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offerrsModel;
  }

  init = () => {
    this.#boardEvents = [...this.#eventsModel.all];
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (this.#eventsModel.isEmpty) {
      this.#renderNoEvents();
      return;
    }

    this.#renderSort();
    this.#renderListEvents();
  };

  #renderNoEvents = () => render(this.#noEventsComponent, this.#boardContainer);

  #renderSort = () => render(this.#sortComponent, this.#boardContainer);

  #renderListEvents = () => {
    render(this.#eventsContainerComponent, this.#boardContainer);
    this.#boardEvents.forEach((itemEvent) => this.#renderEvent(itemEvent));
  };

  #renderEvent = (event) => {
    const destination = this.#destinationModel.getById(event.destination);
    const offers = this.#offersModel.getByType(event.type);
    const eventOffers = this.#offersModel.getSelectedOnes({
      eventType: event.type,
      eventOffers: event.offers,
    });
    const eventPresenter = new EventPresenter({
      destination,
      offers,
      eventOffers,
      titles: this.#destinationModel.names,
      eventsContainer: this.#eventsContainerComponent.element,
      onEventChange: this.#onEventChange,
    });

    this.#eventPresenters.set(event.id, eventPresenter);
    eventPresenter.init(event);
  };

  #clearListEvents = () => {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  };

  #onEventChange = (updateEvent) => {
    this.#boardEvents = updateItem(this.#boardEvents, updateEvent);
    this.#eventPresenters.get(updateEvent.id).init(updateEvent);
  };
}
