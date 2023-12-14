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
    this.boardEvents = this.eventsModel.getAll();

    render(new ListSortView(), this.boardContainer);
    render(this.eventsContainerComponent, this.boardContainer);

    this.boardEvents.forEach((item) => {
      const destination = this.destinationModel.getById(item.destination);
      const offers = this.offersModel.getSelectedOnes({
        TYPES_EVENTS: item.type,
        eventOffers: item.offers,
      });
      render(
        new EventView({ event: item, destination, offers }),
        this.eventsContainerComponent.getElement()
      );
    });
    // const event = null;
    const event = this.eventsModel.getById('22');
    const eventDestination = this.destinationModel.getById(event?.destination);
    render(
      new EventEditingFormView({
        titles: this.destinationModel.getNames(),
        event,
        offers: this.offersModel.getByType(event?.type),
        destination: eventDestination,
      }),
      this.eventsContainerComponent.getElement()
    );
  }
}
