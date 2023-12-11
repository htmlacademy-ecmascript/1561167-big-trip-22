import EventsModel from './model/events-model';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import BoardPresenter from './presenter/board-presenter';
import { render } from './render';
import ListFilterView from './view/list-filter-view';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');
const eventsModel = new EventsModel();
const destinationsModel = new DestinationsModel();
console.log('destinationsModel:', destinationsModel);
const offerrsModel = new OffersModel();
const boardPresenter = new BoardPresenter({
  boardContainer: eventsContainerNode,
  eventsModel,
  destinationsModel,
  offerrsModel,
});

render(new ListFilterView(), filterContainerNode);
boardPresenter.init();
