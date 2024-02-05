import { UpdateType, UserAction } from '../const';
import { RenderPosition, remove, render } from '../framework/render';
import { isEscapeKey } from '../utils/common';
import EventEditingFormView from '../view/event-editing-form-view';
import { nanoid } from 'nanoid';

export default class NewEventPresenter {
  #eventsContainer = null;

  #onDataChange = null;
  #onDestroy = null;

  #eventEditingFormComponent = null;

  constructor({ eventsContainer, onDataChange, onDestroy }) {
    this.#eventsContainer = eventsContainer;
    this.#onDataChange = onDataChange;
    this.#onDestroy = onDestroy;
  }

  init = () => {
    if (this.#eventEditingFormComponent !== null) {
      return;
    }

    this.#eventEditingFormComponent = new EventEditingFormView({
      // event: this.#event,
      // destinations: this.#destinations,
      // offers: this.#offers,
      // onEditingModeToggleClick: this.#onEditingModeToggleClick,
      onEditingFormSubmit: this.#onEditingFormSubmit,
      onDeletingEditFormClick: this.#onDeletingEditFormClick,
    });

    render(
      this.#eventEditingFormComponent,
      this.#eventsContainer,
      RenderPosition.AFTERBEGIN
    );

    document.addEventListener('keydown', this.#onEscapeKeyDown);
  };

  destroy = () => {
    if (this.#eventEditingFormComponent === null) {
      return;
    }

    this.#onDestroy();

    remove(this.#eventEditingFormComponent);
    this.#eventEditingFormComponent = null;
    document.removeEventListener('keydown', this.#onEscapeKeyDown);
  };

  #onEditingFormSubmit = (event) => {
    this.#onDataChange(
      UserAction.ADD_TASK,
      UpdateType.MAJOR,
      //TODO: Пока нет сервера
      { id: nanoid(), ...event }
    );
    this.destroy();
  };

  #onDeletingEditFormClick = () => {
    this.destroy();
  };

  #onEscapeKeyDown = (evt) => {
    if (!isEscapeKey(evt)) {
      return;
    }

    evt.preventDefault();
    this.destroy();
  };
}
