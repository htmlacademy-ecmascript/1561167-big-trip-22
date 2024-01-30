import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';
import HeaderPresenter from './presenter/header-presenter';
import { loadDestinations, loadOffers, loadRandomEvent } from './mock/mocks';
import FilterModel from './model/filter-model';

const headerContainerNode = document.querySelector('.trip-main');
const filterContainerNode = headerContainerNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');

const eventsModel = new EventsModel(loadRandomEvent());
const destinationsModel = new DestinationsModel(loadDestinations());
const offerrsModel = new OffersModel(loadOffers());
const filterModel = new FilterModel();

const headerPresenter = new HeaderPresenter({
  headerContainer: headerContainerNode,
  filterContainer: filterContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
  filterModel,
});
const boardPresenter = new BoardPresenter({
  boardContainer: eventsContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
  filterModel,
});

headerPresenter.init();
boardPresenter.init();
