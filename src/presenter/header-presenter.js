import { RenderPosition, remove, render, replace } from '../framework/render';
import HeaderView from '../view/header_view';
import FilterPresenter from './filter-presenter';

export default class HeaderPresenter {
  #eventsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #headerContainer = null;
  #headerComponent = null;

  #filterPresenter = null;

  constructor({
    eventsModel,
    destinationsModel,
    offerrsModel,
    filterModel,
    headerContainer,
    filterContainer,
  }) {
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offerrsModel;
    this.#headerContainer = headerContainer;
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

  #onModelEvent = () => {
    this.init();
  };
}
