import AbstractView from '../framework/view/abstract-view';

const createEventsContainerView = () => `
  <ul class="trip-events__list"></ul>
`;

export default class EventsContainerView extends AbstractView {
  get template() {
    return createEventsContainerView();
  }
}
