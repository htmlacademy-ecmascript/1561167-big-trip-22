import { UpdateType, UserAction } from '../const';
import { remove, render, replace } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import EventEditingFormView from '../view/event-editing-form-view';
import EventView from '../view/event-view';

export default class EventPresenter {
  #event = null;
  #destinations = null;
  #offers = null;
  #eventComponent = null;
  #eventEditingFormComponent = null;
  #eventsContainer = null;
  #onDataChange = null;
  #onModeChange = null;
  #isEditingMode = false;

  constructor({
    destinations,
    offers,
    eventsContainer,
    onDataChange,
    onModeChange,
  }) {
    this.#destinations = destinations;
    this.#offers = offers;
    this.#eventsContainer = eventsContainer;
    this.#onDataChange = onDataChange;
    this.#onModeChange = onModeChange;
  }

  init(event) {
    this.#event = event;

    const prevEventComponent = this.#eventComponent;
    const prevEventEditingFormComponent = this.#eventEditingFormComponent;

    this.#eventComponent = new EventView({
      event: this.#event,
      destinations: [...this.#destinations],
      offers: [...this.#offers],
      onEventModeToggleClick: this.#onEventModeToggleClick,
      onFavoriteClick: this.#onFavoriteClick,
    });

    this.#eventEditingFormComponent = new EventEditingFormView({
      event: this.#event,
      destinations: [...this.#destinations],
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

    remove(prevEventComponent);
    remove(prevEventEditingFormComponent);
  }

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#eventEditingFormComponent);
  };

  resetView = () => {
    if (this.#isEditingMode) {
      this.#eventEditingFormComponent.reset(this.#event);
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

  #onEditingFormSubmit = (event) => {
    this.#onDataChange(UserAction.UPDATE_EVENT, UpdateType.MINOR, event);
    this.#replaceEditFormToEvent();
  };

  #onFavoriteClick = () => {
    this.#onDataChange(UserAction.UPDATE_EVENT, UpdateType.PATCH, {
      ...this.#event,
      isFavorite: !this.#event.isFavorite,
    });
  };

  #onEscapeKeyDown = (evt) => {
    if (!isEscapeKey(evt)) {
      return;
    }
    evt.preventDefault();
    this.#eventEditingFormComponent.reset(this.#event);
    this.#replaceEditFormToEvent();
    document.removeEventListener('keydown', this.#onEscapeKeyDown);
  };
}
