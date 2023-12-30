import { remove, render, replace } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import EventEditingFormView from '../view/event-editing-form-view';
import EventView from '../view/event-view';

export default class EventPresenter {
  #event = null;
  #destination = null;
  #offers = null;
  #eventOffers = null;
  #titles = null;
  #eventComponent = null;
  #eventEditingFormComponent = null;
  #eventsContainer = null;
  #onEventChange = null;

  constructor({
    destination,
    offers,
    eventOffers,
    titles,
    eventsContainer,
    onEventChange,
  }) {
    this.#destination = destination;
    this.#offers = offers;
    this.#eventOffers = eventOffers;
    this.#titles = titles;
    this.#eventsContainer = eventsContainer;
    this.#onEventChange = onEventChange;
  }

  init(event) {
    this.#event = event;

    const prevEventComponent = this.#eventComponent;
    const prevEventEditingFormComponent = this.#eventEditingFormComponent;

    this.#eventComponent = new EventView({
      event: this.#event,
      destination: this.#destination,
      offers: this.#eventOffers,
      onEventModeToggleClick: this.#onEventModeToggleClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });
    this.#eventEditingFormComponent = new EventEditingFormView({
      event: this.#event,
      destination: this.#destination,
      titles: this.#titles,
      offers: this.#offers,
      onEditingModeToggleClick: this.#onEditingModeToggleClick,
      onEditingFormSubmit: this.#onEditingFormSubmit,
    });

    if (prevEventComponent === null || prevEventEditingFormComponent === null) {
      render(this.#eventComponent, this.#eventsContainer);
      return;
    }

    if (this.#eventsContainer.contains(prevEventComponent.element)) {
      replace(this.#eventComponent, prevEventComponent);
    }
    if (this.#eventsContainer.contains(prevEventEditingFormComponent.element)) {
      replace(this.#eventEditingFormComponent, prevEventEditingFormComponent);
    }

    remove(prevEventComponent);
    remove(prevEventEditingFormComponent);
  }

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#eventEditingFormComponent);
  };

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

  #handleFavoriteClick = () => {
    this.#onEventChange({
      ...this.#event,
      isFavorite: !this.#event.isFavorite,
    });
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
