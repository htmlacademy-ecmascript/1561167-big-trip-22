import { remove, render } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventPresenter from './event-presenter';
import {
  PRESET_SORTING_TYPE,
  TypesSorting,
  UpdateType,
  UserAction,
} from '../const';
import { compareByDuration, compareByPrice } from '../utils/events';
import { filter } from '../utils/filter';

export default class BoardPresenter {
  #boardContainer = null;

  #eventsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #filterModel = null;

  #eventsContainerComponent = new EventsContainerView();
  #noEventsComponent = null;
  #sortComponent = null;

  #currentSortingType = PRESET_SORTING_TYPE;

  #eventPresenters = new Map();

  constructor(board) {
    const {
      boardContainer,
      eventsModel,
      destinationsModel,
      offerrsModel,
      filterModel,
    } = board;

    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offerrsModel;
    this.#filterModel = filterModel;

    this.#eventsModel.addObserver(this.#onModelEvent);
    this.#filterModel.addObserver(this.#onModelEvent);
  }

  get events() {
    const events = this.#eventsModel.events;
    const filteredEvents = filter[this.#filterModel.filter](events);

    switch (this.#currentSortingType) {
      case TypesSorting.TIME:
        return filteredEvents.sort(compareByDuration);
      case TypesSorting.PRICE:
        return filteredEvents.sort(compareByPrice);
    }

    return filteredEvents;
  }

  init = () => {
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (this.events.length === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderSort();
    this.#renderListEvents();
  };

  #renderNoEvents = () => {
    this.#noEventsComponent = new NoEventsView({
      filterType: this.#filterModel.filter,
    });
    render(this.#noEventsComponent, this.#boardContainer);
  };

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
      destinations: this.#destinationsModel.destinations,
      offers: this.#offersModel.offers,
      eventsContainer: this.#eventsContainerComponent.element,
      onDataChange: this.#onViewAction,
      onModeChange: this.#onModeChange,
    });

    this.#eventPresenters.set(event.id, eventPresenter);
    eventPresenter.init(event);
  };

  #clearBoard = () => {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();

    remove(this.#sortComponent);
    if (this.#noEventsComponent) {
      remove(this.#noEventsComponent);
    }
  };

  #onViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

  #onModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        //TODO - обновить список
        this.#clearBoard();
        this.#renderListEvents();
        break;
      case UpdateType.MAJOR:
        //TODO - обновить всю доску
        this.#clearBoard();
        // this.#renderListEvents();
        this.#renderBoard();
        break;
    }
  };

  #onModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #onSortClick = (typeSorting) => {
    if (this.#currentSortingType === typeSorting) {
      return;
    }

    this.#currentSortingType = typeSorting;
    this.#clearBoard();
    this.#renderListEvents();
  };
}
