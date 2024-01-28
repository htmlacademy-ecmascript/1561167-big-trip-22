import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';
import HeaderPresenter from './presenter/header-presenter';
import { loadDestinations, loadOffers, loadRandomEvent } from './mock/mocks';
import FilterModel from './model/filter-model';
import { TypesFilters } from './const';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');

const eventsModel = new EventsModel(loadRandomEvent());
const destinationsModel = new DestinationsModel(loadDestinations());
const offerrsModel = new OffersModel(loadOffers());
const filterModel = new FilterModel();

const filters = [
  {
    type: TypesFilters.EVERYTHING,
    count: 0,
  },
];

const headerPresenter = new HeaderPresenter({
  tripHeaderContainer: tripHeaderNode,
  filterContainer: filterContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
  filters,
});
const boardPresenter = new BoardPresenter({
  boardContainer: eventsContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
});

headerPresenter.init();
boardPresenter.init();
