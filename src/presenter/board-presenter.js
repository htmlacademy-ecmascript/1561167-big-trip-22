import { render } from '../render';
import ListEventsView from '../view/list-events-view';
import ListSortView from '../view/list-sort-view';
import NewEventView from '../view/new-event-view';
import EventView from '../view/event-view';
import EditorEventView from '../view/editor-event-view';

export default class BoardPresenter {
  listEventsComponent = new ListEventsView();

  constructor(board) {
    const { boardContainer, eventsModel, destinationsModel, offerrsModel } =
      board;
    this.boardContainer = boardContainer;
    this.eventsModel = eventsModel;
    this.destinationModel = destinationsModel;
    this.offersModel = offerrsModel;
  }

  init() {
    this.boardEvents = this.eventsModel.getEvents();

    render(new ListSortView(), this.boardContainer);
    render(this.listEventsComponent, this.boardContainer);
    render(new NewEventView(), this.listEventsComponent.getElement());
    this.boardEvents.forEach((event) => {
      const destination = this.destinationModel.getById(event.destination);
      const offers = this.offersModel.getByType(event.type, event.offers);
      render(
        new EventView({ event, destination, offers }),
        this.listEventsComponent.getElement()
      );
    });
    render(new EditorEventView(), this.listEventsComponent.getElement());
  }
}
