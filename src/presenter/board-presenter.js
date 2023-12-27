import { render, replace } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import ListSortView from '../view/list-sort-view';
import EventView from '../view/event-view';
import EventEditingFormView from '../view/event-editing-form-view';
import NoEventsView from '../view/no-events-view';
import { isEscapeKey } from '../utils/common';

export default class BoardPresenter {
  #boardContainer = null;
  #eventsModel = null;
  #destinationModel = null;
  #offersModel = null;
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

  init = () => {
    this.#boardEvents = this.#eventsModel.all;
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (this.#eventsModel.isEmpty) {
      render(new NoEventsView(), this.#boardContainer);
      return;
    }

    render(new ListSortView(), this.#boardContainer);
    render(this.#eventsContainerComponent, this.#boardContainer);
    this.#boardEvents.forEach((itemEvent) => this.#renderEvent(itemEvent));
  };

  #renderEvent = (event) => {
    const escapeKeyDownHandler = (evt) => {
      if (!isEscapeKey(evt)) {
        return;
      }
      evt.preventDefault();
      replaceEditFormToPoint();
      document.removeEventListener('keydown', escapeKeyDownHandler);
    };
    const destination = this.#destinationModel.getById(event.destination);
    const eventOffers = this.#offersModel.getSelectedOnes({
      eventType: event.type,
      eventOffers: event.offers,
    });
    const eventComponent = new EventView({
      event,
      destination,
      offers: eventOffers,
      onEditEventClick: () => {
        replacePointToEditForm();
        document.addEventListener('keydown', escapeKeyDownHandler);
      },
    });
    const eventEditingFormComponent = new EventEditingFormView({
      event,
      destination,
      titles: this.#destinationModel.names,
      offers: this.#offersModel.getByType(event.type),
      onEditingFormClick: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escapeKeyDownHandler);
      },
      onEditingFormSubmit: () => {
        //TODO - ОТПРАВКА ФОРМЫ
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escapeKeyDownHandler);
      },
    });
    function replacePointToEditForm() {
      replace(eventEditingFormComponent, eventComponent);
    }
    function replaceEditFormToPoint() {
      replace(eventComponent, eventEditingFormComponent);
    }

    render(eventComponent, this.#eventsContainerComponent.element);
  };
}
