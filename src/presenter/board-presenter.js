import { render } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventPresenter from './event-presenter';
import { getLowerCase, updateItem } from '../utils/common';
import { PRESET_SORTING_TYPE, TypesSorting } from '../const';
import { compareByDuration, compareByPrice } from '../utils/events';

export default class BoardPresenter {
  #boardContainer = null;
  #eventsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #boardEvents = [];
  #initialStateEvents = [];
  #eventsContainerComponent = new EventsContainerView();
  #noEventsComponent = new NoEventsView();
  #eventPresenters = new Map();

  #sortComponent = null;
  #currentSortingType = getLowerCase(PRESET_SORTING_TYPE);

  constructor(board) {
    const { boardContainer, eventsModel, destinationsModel, offerrsModel } =
      board;

    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offerrsModel;
  }

  get events() {
    return this.#eventsModel.events;
  }

  init = () => {
    this.#initialStateEvents = [...this.#eventsModel.events];
    this.#boardEvents = [...this.#initialStateEvents];
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (!this.#boardEvents.length) {
      this.#renderNoEvents();
      return;
    }

    this.#renderSort();
    this.#renderListEvents();
  };

  #renderNoEvents = () => render(this.#noEventsComponent, this.#boardContainer);

  #renderSort = () => {
    this.#sortComponent = new SortView({
      onSortClick: this.#onSortClick,
      currentSortingType: this.#currentSortingType,
    });
    render(this.#sortComponent, this.#boardContainer);
  };

  #renderListEvents = () => {
    render(this.#eventsContainerComponent, this.#boardContainer);
    this.#boardEvents.forEach((itemEvent) => this.#renderEvent(itemEvent));
  };

  #renderEvent = (event) => {
    const eventPresenter = new EventPresenter({
      destinations: this.#destinationsModel.all,
      offers: this.#offersModel.all,
      eventsContainer: this.#eventsContainerComponent.element,
      onEventChange: this.#onEventChange,
      onModeChange: this.#onModeChange,
    });

    this.#eventPresenters.set(event.id, eventPresenter);
    eventPresenter.init(event);
  };

  #clearListEvents = () => {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  };

  #sortEvent = (typeSorting) => {
    switch (typeSorting) {
      case getLowerCase(TypesSorting.TIME):
        this.#boardEvents.sort(compareByDuration);
        break;
      case getLowerCase(TypesSorting.PRICE):
        this.#boardEvents.sort(compareByPrice);
        break;
      default:
        this.#boardEvents = [...this.#initialStateEvents];
        break;
    }
  };

  #onEventChange = (updateEvent) => {
    this.#boardEvents = updateItem(this.#boardEvents, updateEvent);
    this.#initialStateEvents = updateItem(
      this.#initialStateEvents,
      updateEvent
    );
    this.#eventPresenters.get(updateEvent.id).init(updateEvent);
  };

  #onModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #onSortClick = (typeSorting) => {
    if (this.#currentSortingType === typeSorting) {
      return;
    }

    this.#currentSortingType = typeSorting;
    this.#sortEvent(typeSorting);
    this.#clearListEvents();
    this.#renderListEvents();
  };
}
