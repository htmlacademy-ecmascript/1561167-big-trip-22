import { createElement } from '../render';

const createListEventsTemplate = () => `
  <ul class="trip-events__list"></ul>
`;

export default class ListEventsView {
  getTemplate = () => createListEventsTemplate();

  getElement = () => {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  };

  removeElement = () => {
    this.element = null;
  };
}
