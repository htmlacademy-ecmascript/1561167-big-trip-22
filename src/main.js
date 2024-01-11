import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';
import { loadDestinations, loadOffers, loadRandomEvent } from './mock/mocks';
import { TEST_EVENTS_COUNT } from './const';
import { generateFilter } from './mock/filter';
import HeaderPresenter from './presenter/header-presenter';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');

const eventsModel = new EventsModel(
  Array.from({ length: TEST_EVENTS_COUNT }, loadRandomEvent).sort(
    (eventA, eventB) => new Date(eventA.dateFrom) - new Date(eventB.dateFrom)
  )
);
const destinationsModel = new DestinationsModel(loadDestinations());
const offerrsModel = new OffersModel(loadOffers());
const filters = generateFilter(eventsModel.all);

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
