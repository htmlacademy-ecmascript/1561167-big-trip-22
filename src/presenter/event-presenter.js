import { render, replace } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import EventEditingFormView from '../view/event-editing-form-view';
import EventView from '../view/event-view';

export default class EventPresenter {
  #event = null;
  #destinationModel = null;
  #offersModel = null;
  #eventComponent = null;
  #eventEditingFormComponent = null;
  #eventsContainerComponent = null;

  constructor({ destinationModel, offersModel, eventsContainerComponent }) {
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
    this.#eventsContainerComponent = eventsContainerComponent;
  }

  init(event) {
    this.#event = event;
    const destination = this.#destinationModel.getById(this.#event.destination);
    const eventOffers = this.#offersModel.getSelectedOnes({
      eventType: this.#event.type,
      eventOffers: this.#event.offers,
    });

    this.#eventComponent = new EventView({
      event: this.#event,
      destination,
      offers: eventOffers,
      onEventModeToggleClick: this.#onEventModeToggleClick,
    });
    this.#eventEditingFormComponent = new EventEditingFormView({
      event: this.#event,
      destination,
      titles: this.#destinationModel.names,
      offers: this.#offersModel.getByType(event.type),
      onEditingModeToggleClick: this.#onEditingModeToggleClick,
      onEditingFormSubmit: this.#onEditingFormSubmit,
    });

    this.#renderEvent();
  }

  #renderEvent = () =>
    render(this.#eventComponent, this.#eventsContainerComponent.element);

  #replaceEventToEditForm = () =>
    replace(this.#eventEditingFormComponent, this.#eventComponent);

  #replaceEditFormToEvent = () =>
    replace(this.#eventComponent, this.#eventEditingFormComponent);

  #onEventModeToggleClick = () => {
    this.#replaceEventToEditForm();
    document.addEventListener('keydown', this.#escapeKeyDownHandler);
  };

  #onEditingModeToggleClick = () => {
    this.#replaceEditFormToEvent();
    document.removeEventListener('keydown', this.#escapeKeyDownHandler);
  };

  #onEditingFormSubmit = () => {
    //TODO - ОТПРАВКА ФОРМЫ
    this.#replaceEditFormToEvent();
    document.removeEventListener('keydown', this.#escapeKeyDownHandler);
  };

  #escapeKeyDownHandler = (evt) => {
    if (!isEscapeKey(evt)) {
      return;
    }
    evt.preventDefault();
    this.#replaceEditFormToEvent();
    document.removeEventListener('keydown', this.#escapeKeyDownHandler);
  };
}
