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
  #onModeChange = null;
  #isEditingMode = false;

  constructor({
    destination,
    offers,
    // eventOffers,
    titles,
    eventsContainer,
    onEventChange,
    onModeChange,
  }) {
    this.#destination = destination;
    this.#offers = offers;
    // this.#eventOffers = eventOffers;
    this.#titles = titles;
    this.#eventsContainer = eventsContainer;
    this.#onEventChange = onEventChange;
    this.#onModeChange = onModeChange;
  }

  init(event) {
    this.#event = event;

    const prevEventComponent = this.#eventComponent;
    const prevEventEditingFormComponent = this.#eventEditingFormComponent;

    this.#eventComponent = new EventView({
      event: this.#event,
      destination: this.#destination,
      offers: [...this.#offers],
      onEventModeToggleClick: this.#onEventModeToggleClick,
      onFavoriteClick: this.#onFavoriteClick,
    });
    this.#eventEditingFormComponent = new EventEditingFormView({
      event: this.#event,
      destination: this.#destination,
      titles: this.#titles,
      offers: [...this.#offers],
      onEditingModeToggleClick: this.#onEditingModeToggleClick,
      onEditingFormSubmit: this.#onEditingFormSubmit,
    });

    if (prevEventComponent === null || prevEventEditingFormComponent === null) {
      render(this.#eventComponent, this.#eventsContainer);
      return;
    }

    if (!this.#isEditingMode) {
      replace(this.#eventComponent, prevEventComponent);
    } else {
      replace(this.#eventEditingFormComponent, prevEventEditingFormComponent);
    }
    // if (this.#isEditingMode) {
    //   replace(this.#eventEditingFormComponent, prevEventEditingFormComponent);
    // }

    remove(prevEventComponent);
    remove(prevEventEditingFormComponent);
  }

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#eventEditingFormComponent);
  };

  resetView = () => {
    if (this.#isEditingMode) {
      this.#replaceEditFormToEvent();
    }
  };

  #replaceEventToEditForm = () => {
    replace(this.#eventEditingFormComponent, this.#eventComponent);
    this.#onModeChange();
    this.#isEditingMode = true;
  };

  #replaceEditFormToEvent = () => {
    document.removeEventListener('keydown', this.#onEscapeKeyDown);
    replace(this.#eventComponent, this.#eventEditingFormComponent);
    this.#isEditingMode = false;
  };

  #onEventModeToggleClick = () => {
    this.#replaceEventToEditForm();
    document.addEventListener('keydown', this.#onEscapeKeyDown);
  };

  #onEditingModeToggleClick = () => {
    this.#replaceEditFormToEvent();
  };

  #onEditingFormSubmit = () => {
    //TODO - ОТПРАВКА ФОРМЫ
    this.#replaceEditFormToEvent();
  };

  #onFavoriteClick = () => {
    this.#onEventChange({
      ...this.#event,
      isFavorite: !this.#event.isFavorite,
    });
  };

  #onEscapeKeyDown = (evt) => {
    if (!isEscapeKey(evt)) {
      return;
    }
    evt.preventDefault();
    this.#replaceEditFormToEvent();
    document.removeEventListener('keydown', this.#onEscapeKeyDown);
  };
}
