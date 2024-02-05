import AbstractView from '../framework/view/abstract-view';

const createNewEventButtonTemplate = () => `
  <button
    class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">
    New event
  </button>
`;

export default class NewEventButtonView extends AbstractView {
  #onNewEventButtonClick = null;

  constructor(onNewEventButtonClick) {
    super();
    this.#onNewEventButtonClick = onNewEventButtonClick;

    this.element.addEventListener('click', this.#newEventButtonClickHandler);
  }

  get template() {
    return createNewEventButtonTemplate();
  }

  #newEventButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onNewEventButtonClick(evt);
  };
}
