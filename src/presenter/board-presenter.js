import { render } from '../render';
import EventsContainerView from '../view/events-container-view';
import ListSortView from '../view/list-sort-view';
import EventView from '../view/event-view';
import EventEditingFormView from '../view/event-editing-form-view';

export default class BoardPresenter {
  eventsContainerComponent = new EventsContainerView();

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
    render(this.eventsContainerComponent, this.boardContainer);

    this.boardEvents.forEach((event) => {
      const destination = this.destinationModel.getById(event.destination);
      const offers = this.offersModel.getByType(event.type, event.offers);
      render(
        new EventView({ event, destination, offers }),
        this.eventsContainerComponent.getElement()
      );
    });
    const titles = this.destinationModel.getNames();
    const destinationEvent = this.destinationModel.getById('dest2');
    render(
      new EventEditingFormView({ titles, destination: destinationEvent }),
      this.eventsContainerComponent.getElement()
    );
  }
}
