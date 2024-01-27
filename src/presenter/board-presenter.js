import { render } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventPresenter from './event-presenter';
import { PRESET_SORTING_TYPE, TypesSorting } from '../const';
import { compareByDuration, compareByPrice } from '../utils/events';

export default class BoardPresenter {
  #boardContainer = null;
  #eventsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #eventsContainerComponent = new EventsContainerView();
  #noEventsComponent = new NoEventsView();
  #eventPresenters = new Map();

  #sortComponent = null;
  #currentSortingType = PRESET_SORTING_TYPE;

  constructor(board) {
    const { boardContainer, eventsModel, destinationsModel, offerrsModel } =
      board;

    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offerrsModel;

    this.#eventsModel.addObserver(this.#onModelEvent);
  }

  get events() {
    switch (this.#currentSortingType) {
      case TypesSorting.TIME:
        return [...this.#eventsModel.events].sort(compareByDuration);
      case TypesSorting.PRICE:
        return [...this.#eventsModel.events].sort(compareByPrice);
    }
    return this.#eventsModel.events;
  }

  init = () => {
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (!this.events.length) {
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
    this.events.forEach((itemEvent) => this.#renderEvent(itemEvent));
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

  #onEventChange = (updateEvent) => {
    // this.events = updateItem(this.events, updateEvent);
    this.#eventPresenters.get(updateEvent.id).init(updateEvent);
  };

  #onViewAction = (actionType, updateType, update) => {
    console.log('#onViewAction:', actionType, updateType, update);
  };

  #onModelEvent = (updateType, data) => {
    console.log('#onModelEvent:', updateType, data);
  };

  #onModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #onSortClick = (typeSorting) => {
    if (this.#currentSortingType === typeSorting) {
      return;
    }

    this.#currentSortingType = typeSorting;
    this.#clearListEvents();
    this.#renderListEvents();
  };
}
