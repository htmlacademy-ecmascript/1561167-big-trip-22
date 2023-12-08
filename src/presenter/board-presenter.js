import { render } from '../render';
import ListEventsView from '../view/list-events-view';
import ListSortView from '../view/list-sort-view';
import NewEventView from '../view/new-event-view';
import EventView from '../view/event-view';
import EditorEventView from '../view/editor-event-view';

export default class BoardPresenter {
  listEventsComponent = new ListEventsView();

  constructor({ boardContainer, eventsModel }) {
    this.boardContainer = boardContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.boardEvents = this.eventsModel.getEvents();

    render(new ListSortView(), this.boardContainer);
    render(this.listEventsComponent, this.boardContainer);
    render(new NewEventView(), this.listEventsComponent.getElement());
    for (let i = 0; i < this.boardEvents.length; i++) {
      render(
        new EventView({ event: this.boardEvents[i] }),
        this.listEventsComponent.getElement()
      );
    }
    render(new EditorEventView(), this.listEventsComponent.getElement());
  }
}
