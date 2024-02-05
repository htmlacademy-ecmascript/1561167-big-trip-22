import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';
import HeaderPresenter from './presenter/header-presenter';
import { loadDestinations, loadOffers, loadRandomEvent } from './mock/mocks';
import FilterModel from './model/filter-model';
import NewEventButtonView from './view/new-event-button-view';

const headerContainerNode = document.querySelector('.trip-main');
const filterContainerNode = headerContainerNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');

const eventsModel = new EventsModel(loadRandomEvent());
const destinationsModel = new DestinationsModel(loadDestinations());
const offerrsModel = new OffersModel(loadOffers());
const filterModel = new FilterModel();

const newEventButtonComponent = new NewEventButtonView(onNewEventButtonClick);

const headerPresenter = new HeaderPresenter({
  headerContainer: headerContainerNode,
  filterContainer: filterContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
  filterModel,
  newEventButtonComponent,
});
const boardPresenter = new BoardPresenter({
  boardContainer: eventsContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
  filterModel,
  onNewEventDestroy: onNewEventFormClose,
});

function onNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function onNewEventButtonClick() {
  newEventButtonComponent.element.disabled = true;
  boardPresenter.createNewEvent();
}

headerPresenter.init();
boardPresenter.init();
