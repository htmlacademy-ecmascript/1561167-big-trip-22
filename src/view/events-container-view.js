import { createElement } from '../render';

const createEventsContainerView = () => `
  <ul class="trip-events__list"></ul>
`;

export default class EventsContainerView {
  getTemplate = () => createEventsContainerView();

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
