import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';
import { loadDestinations, loadOffers, loadRandomEvent } from './mock/mocks';
import { TEST_EVENTS_COUNT } from './const';
import { generateFilter } from './mock/filter';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');

const eventsModel = new EventsModel(
  Array.from({ length: TEST_EVENTS_COUNT }, loadRandomEvent)
);
const destinationsModel = new DestinationsModel(loadDestinations());
const offerrsModel = new OffersModel(loadOffers());
const filters = generateFilter(eventsModel.all);
const boardPresenter = new BoardPresenter({
  tripHeaderContainer: tripHeaderNode,
  filterContainer: filterContainerNode,
  boardContainer: eventsContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
  filters,
});

boardPresenter.init();
