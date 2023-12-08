import { render } from '../render';
import ListEventsView from '../view/list-events-view';
import ListSortView from '../view/list-sort-view';
import NewEventView from '../view/new-event-view';
import EventView from '../view/event-view';
import EditorEventView from '../view/editor-event-view';

export default class BoardPresenter {
  listEventsComponent = new ListEventsView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new ListSortView(), this.boardContainer);
    render(this.listEventsComponent, this.boardContainer);
    render(new NewEventView(), this.listEventsComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.listEventsComponent.getElement());
    }
    render(new EditorEventView(), this.listEventsComponent.getElement());
  }
}
