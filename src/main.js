import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');

const eventsModel = new EventsModel();
const destinationsModel = new DestinationsModel();
const offerrsModel = new OffersModel();
const boardPresenter = new BoardPresenter({
  tripHeaderContainer: tripHeaderNode,
  filterContainer: filterContainerNode,
  boardContainer: eventsContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
});

boardPresenter.init();
