import { RenderPosition, remove, render, replace } from '../framework/render';
import FilterView from '../view/filter-view';
import InformationTripView from '../view/information-trip-view';

export default class HeaderPresenter {
  #eventsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #tripHeaderContainer = null;

  #filterContainer = null;
  #filters = null;
  #filterComponent = null;
  #informationTripComponent = null;

  constructor({
    eventsModel,
    destinationsModel,
    offerrsModel,
    tripHeaderContainer,
    filterContainer,
    filters,
  }) {
    this.#eventsModel = eventsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offerrsModel;
    this.#tripHeaderContainer = tripHeaderContainer;
    this.#filterContainer = filterContainer;
    this.#filters = filters;

    this.#eventsModel.addObserver(this.#onModelEvent);
  }

  init = () => {
    this.#informationTripComponent = new InformationTripView({
      events: this.#eventsModel.events,
      offers: this.#offersModel.offers,
      destinations: this.#destinationsModel.destinations,
    });
    this.#filterComponent = new FilterView(this.#filters);
    this.#renderHeader();
  };

  #onModelEvent = () => {
    const newComponent = new InformationTripView({
      events: this.#eventsModel.events,
      offers: this.#offersModel.offers,
      destinations: this.#destinationsModel.destinations,
    });
    replace(newComponent, this.#informationTripComponent);
    this.#informationTripComponent = newComponent;
  };

  #renderHeader = () => {
    render(
      this.#informationTripComponent,
      this.#tripHeaderContainer,
      RenderPosition.AFTERBEGIN
    );
    render(this.#filterComponent, this.#filterContainer);
  };

  #destroy = () => {
    remove(this.#filterComponent);
    remove(this.#informationTripComponent);
  };
}
