import { RenderPosition, render } from '../framework/render';
import FilterView from '../view/filter-view';
import InformationTripView from '../view/information-trip-view';

export default class HeaderPresenter {
  #eventsModel = null;
  #destinationModel = null;
  #offersModel = null;
  #tripHeaderContainer = null;
  #filterContainer = null;
  #filters = null;

  constructor({
    eventsModel,
    destinationsModel,
    offerrsModel,
    tripHeaderContainer,
    filterContainer,
    filters,
  }) {
    this.#eventsModel = eventsModel;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offerrsModel;
    this.#tripHeaderContainer = tripHeaderContainer;
    this.#filterContainer = filterContainer;
    this.#filters = filters;
  }

  init = () => {
    const informationTripComponent = new InformationTripView({
      events: this.#eventsModel.all,
      offers: this.#offersModel.all,
      destinations: this.#destinationModel.all,
    });
    if (informationTripComponent.element) {
      render(
        informationTripComponent,
        this.#tripHeaderContainer,
        RenderPosition.AFTERBEGIN
      );
    }
    render(new FilterView(this.#filters), this.#filterContainer);
  };
}
