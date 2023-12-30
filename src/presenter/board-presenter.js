import { render } from '../framework/render';
import EventsContainerView from '../view/events-container-view';
import SortView from '../view/sort-view';
import NoEventsView from '../view/no-events-view';
import EventPresenter from './event-presenter';

export default class BoardPresenter {
  #boardContainer = null;
  #eventsModel = null;
  #destinationModel = null;
  #offersModel = null;

  #boardEvents = [];
  #eventsContainerComponent = new EventsContainerView();
  #sortComponent = new SortView();
  #noEventsComponent = new NoEventsView();

  constructor(board) {
    const { boardContainer, eventsModel, destinationsModel, offerrsModel } =
      board;

    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offerrsModel;
  }

  init = () => {
    this.#boardEvents = [...this.#eventsModel.all];
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (this.#eventsModel.isEmpty) {
      this.#renderNoEvents();
      return;
    }

    this.#renderSort();
    this.#renderEventsList();
  };

  #renderNoEvents = () => render(this.#noEventsComponent, this.#boardContainer);

  #renderSort = () => render(this.#sortComponent, this.#boardContainer);

  #renderEventsList = () => {
    render(this.#eventsContainerComponent, this.#boardContainer);
    this.#boardEvents.forEach((itemEvent) => this.#renderEvent(itemEvent));
  };

  #renderEvent = (event) => {
    const eventPresenter = new EventPresenter({
      destinationModel: this.#destinationModel,
      offersModel: this.#offersModel,
      eventsContainerComponent: this.#eventsContainerComponent,
    });

    eventPresenter.init(event);
  };
}
