import { RenderPosition, remove, render, replace } from '../framework/render';
import HeaderView from '../view/header-view';
// import NewEventButtonView from '../view/new-event-button-view';
import FilterPresenter from './filter-presenter';

export default class HeaderPresenter {
  #eventsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #headerContainer = null;
  #headerComponent = null;

  #filterPresenter = null;

  #newEventButtonComponent = null;

  constructor({
    eventsModel,
    destinationsModel,
    offerrsModel,
    filterModel,
    headerContainer,
    filterContainer,
    newEventButtonComponent,
  }) {
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offerrsModel;
    this.#headerContainer = headerContainer;
    this.#newEventButtonComponent = newEventButtonComponent;
    this.#filterPresenter = new FilterPresenter({
      filterContainer,
      filterModel,
      eventsModel,
    });

    this.#eventsModel.addObserver(this.#onModelEvent);
  }

  init = () => {
    const prevHeaderComponent = this.#headerComponent;

    this.#headerComponent = new HeaderView({
      events: this.#eventsModel.events,
      offers: this.#offersModel.offers,
      destinations: this.#destinationsModel.destinations,
    });

    this.#renderNewEventButton();

    if (prevHeaderComponent === null) {
      render(
        this.#headerComponent,
        this.#headerContainer,
        RenderPosition.AFTERBEGIN
      );
      this.#filterPresenter.init();
      return;
    }

    replace(this.#headerComponent, prevHeaderComponent);
    remove(prevHeaderComponent);
    this.#filterPresenter.init();
  };

  #renderNewEventButton = () =>
    render(this.#newEventButtonComponent, this.#headerContainer);

  #onModelEvent = () => {
    this.init();
  };
}
